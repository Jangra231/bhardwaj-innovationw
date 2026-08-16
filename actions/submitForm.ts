"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import dbConnect from "@/lib/mongodb";
import EnquiryModel, { EnquiryInput, EmailDeliveryStatus } from "@/models/Enquiry";

export type SubmitState = {
  success: boolean;
  message: string;
  data?: EnquiryInput & {
    id?: string;
    createdAt?: string;
    emailStatus?: EmailDeliveryStatus;
  };
  dbMode?: string;
  details?: { field: string; message: string }[];
};

const EnquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  contactNo: z.string().trim().min(8, "Contact number must be at least 8 digits"),
  email: z.string().trim().email("Invalid email address"),
  organization: z.string().trim().default(""),
  designation: z.string().trim().default(""),
  serviceNeeded: z.string().trim().min(1, "Please select a product or software"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character] ?? character);
}

function createTransporter(): nodemailer.Transporter {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not fully configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in the deployment environment.",
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
}

async function sendNotificationEmail(
  payload: EnquiryInput & { id?: string; createdAt?: string },
) {
  const destinationEmail = process.env.DESTINATION_EMAIL || "contact@bhardwajinnovations.com";
  const transporter = createTransporter();
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!fromEmail) {
    throw new Error("SMTP_FROM or SMTP_USER must be configured for the sender address.");
  }

  await transporter.verify();

  const safe = {
    name: escapeHtml(payload.name),
    contactNo: escapeHtml(payload.contactNo),
    email: escapeHtml(payload.email),
    organization: escapeHtml(payload.organization || "—"),
    designation: escapeHtml(payload.designation || "—"),
    serviceNeeded: escapeHtml(payload.serviceNeeded),
    message: escapeHtml(payload.message).replace(/\n/g, "<br />"),
  };

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #0f172a; margin-bottom: 4px;">New Enquiry Received</h2>
      <p style="color: #64748b; font-size: 13px; margin-bottom: 24px;">A new enquiry has been submitted via the Bhardwaj Innovations website.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #64748b; width: 160px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #0f172a;">${safe.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Contact No</strong></td><td style="padding: 8px 0; color: #0f172a;">${safe.contactNo}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td><td style="padding: 8px 0; color: #0f172a;">${safe.email}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Organization</strong></td><td style="padding: 8px 0; color: #0f172a;">${safe.organization}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Designation</strong></td><td style="padding: 8px 0; color: #0f172a;">${safe.designation}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;"><strong>Product or Software Needed</strong></td><td style="padding: 8px 0; color: #0f172a;">${safe.serviceNeeded}</td></tr>
      </table>
      <h3 style="color: #0f172a; margin-top: 24px; margin-bottom: 8px;">Message</h3>
      <p style="color: #475569; font-size: 14px; line-height: 1.6; background: #f8fafc; padding: 16px; border-radius: 8px;">${safe.message}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Bhardwaj Innovations Website" <${fromEmail}>`,
    to: destinationEmail,
    replyTo: payload.email,
    subject: `New Enquiry: ${payload.serviceNeeded} — ${payload.name}`,
    text: `New enquiry from ${payload.name} (${payload.email}).\n\nProduct or Software: ${payload.serviceNeeded}\nContact: ${payload.contactNo}\nOrganization: ${payload.organization || "—"}\n\nMessage:\n${payload.message}`,
    html,
  });
}

async function recordEmailStatus(
  id: unknown,
  status: EmailDeliveryStatus,
  error?: string,
) {
  try {
    await EnquiryModel.findByIdAndUpdate(id, {
      emailStatus: status,
      emailError: error || "",
      ...(status === "sent" ? { emailedAt: new Date() } : {}),
    });
  } catch (statusError) {
    console.error("Unable to record enquiry email status:", statusError);
  }
}

export async function submitForm(
  _prevState: SubmitState | null,
  formData: FormData,
): Promise<SubmitState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    contactNo: String(formData.get("contactNo") ?? ""),
    email: String(formData.get("email") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    designation: String(formData.get("designation") ?? ""),
    serviceNeeded: String(formData.get("serviceNeeded") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = EnquirySchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed. Please check your fields.",
      details: parsed.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  const data = parsed.data;

  try {
    await dbConnect();
    const saved = await EnquiryModel.create(data);
    const savedData = {
      ...data,
      id: String(saved._id),
      createdAt: saved.createdAt?.toISOString(),
    };

    try {
      await sendNotificationEmail(savedData);
      await recordEmailStatus(saved._id, "sent");

      return {
        success: true,
        message: "Enquiry submitted successfully and sent to our company mailbox. Our team will reach out shortly.",
        data: { ...savedData, emailStatus: "sent" },
        dbMode: "mongodb",
      };
    } catch (emailError) {
      const errorMessage = emailError instanceof Error ? emailError.message : "Unknown SMTP delivery error";
      console.error("SMTP notification failed after enquiry was saved:", emailError);
      await recordEmailStatus(saved._id, "failed", errorMessage);

      return {
        success: false,
        message: "Your enquiry was saved, but the notification email could not be delivered. Please try again or contact us directly at contact@bhardwajinnovations.com.",
        data: { ...savedData, emailStatus: "failed" },
        dbMode: "mongodb",
      };
    }
  } catch (error) {
    console.error("Error processing enquiry submission:", error);
    return {
      success: false,
      message: "We could not save your enquiry right now. Please try again later or contact us directly at contact@bhardwajinnovations.com.",
    };
  }
}
