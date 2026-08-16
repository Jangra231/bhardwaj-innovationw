import mongoose, { Schema, Document, Model } from "mongoose";

export type EmailDeliveryStatus = "pending" | "sent" | "failed";

export interface IEnquiry extends Document {
  name: string;
  contactNo: string;
  email: string;
  organization: string;
  designation: string;
  serviceNeeded: string;
  message: string;
  emailStatus: EmailDeliveryStatus;
  emailError: string;
  emailedAt?: Date;
  createdAt: Date;
}

export interface EnquiryInput {
  name: string;
  contactNo: string;
  email: string;
  organization?: string;
  designation?: string;
  serviceNeeded: string;
  message: string;
}

const EnquirySchema = new Schema<IEnquiry>({
  name: { type: String, required: [true, "Name is required"], trim: true },
  contactNo: { type: String, required: [true, "Contact number is required"], trim: true },
  email: { type: String, required: [true, "Email is required"], lowercase: true, trim: true },
  organization: { type: String, trim: true, default: "" },
  designation: { type: String, trim: true, default: "" },
  serviceNeeded: { type: String, required: [true, "Product or software selection is required"], trim: true },
  message: { type: String, required: [true, "Message is required"], trim: true },
  emailStatus: { type: String, enum: ["pending", "sent", "failed"], default: "pending", index: true },
  emailError: { type: String, default: "" },
  emailedAt: { type: Date },
  createdAt: { type: Date, default: Date.now, index: true },
});

// Avoid model recompilation errors during hot-reloads / serverless reuse
const EnquiryModel: Model<IEnquiry> =
  (mongoose.models.Enquiry as Model<IEnquiry>) ||
  mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default EnquiryModel;
