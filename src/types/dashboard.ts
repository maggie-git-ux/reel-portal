export type UserRole = "client" | "admin" | "creator";

export interface FileItem {
  id: string;
  name: string;
  url: string;
  size: string;
  createdAt: string;
  thumbnail?: string;
}

export interface PaymentHistoryItem {
  method: string;
  amount: number;
  date: string;
  status: string;
}

export interface EventPoc {
  name: string;
  phone: string;
}

export interface EventDetails {
  description: string;
  musicPreferences: string;
  locationLink: string;
  clientPoc: EventPoc;
}

export interface EventPayments {
  total: number;
  paid: number;
  due: number;
  history: PaymentHistoryItem[];
}

export interface EventFiles {
  reels: FileItem[];
  pictures: FileItem[];
  raw: FileItem[];
}

export interface EventMeta {
  startTime: string;
  endTime: string;
  duration: string;
}

export interface EventRating {
  value: number;
  comment: string;
}

export interface EventItem {
  id: string;
  name: string;
  occasionType: string;
  date: string;
  status: string;
  poc: EventPoc;
}

export interface SelectedEvent {
  id: string;
  details: EventDetails;
  payments: EventPayments;
  files: EventFiles;
  meta: EventMeta;
  rating: EventRating;
}

export interface ClientInfo {
  name: string;
  phone: string;
  tncAccepted: boolean;
}

export interface DashboardData {
  client: ClientInfo;
  events: EventItem[];
  selectedEvent: SelectedEvent;
}
