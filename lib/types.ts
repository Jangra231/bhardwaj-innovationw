export interface ProductDetail {
  id: string;
  category: "Software" | "Hardware";
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  gifUrl?: string;
  videoUrl?: string;
  dashboardPreview?: string;
}

export interface EnquiryInput {
  name: string;
  contactNo: string;
  email: string;
  organization: string;
  designation: string;
  serviceNeeded: string;
  message: string;
}

export interface Enquiry extends EnquiryInput {
  id: string;
  createdAt: string;
}
