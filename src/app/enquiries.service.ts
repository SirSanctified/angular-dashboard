import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// make this service make api requests to the server
export class EnquiriesService {
  constructor() {}
  getEnquiries(): Promise<EnquiryResponse> {
    const enquiries = fetch('https://fsboafrica.com/api/enquiries/all').then(
      (res) => res.json()
    );
    return enquiries;
  }
  getEnquiry(id: number): Promise<Enquiry> {
    const enquiry = fetch(
      `https://fsboafrica.com/api/enquiries/get-single/${id}`
    ).then((res) => res.json());
    return enquiry;
  }
  deleteEnquiry(id: number): Promise<Enquiry> {
    const deletedEnquiry = fetch(
      `https://fsboafrica.com/api/enquiries/delete/${id}`,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
    return deletedEnquiry;
  }
}

export interface Enquiry {
  createdAt: string;
  deletedAt: Date | null;
  deletedBy: string | null;
  dialingCode: string;
  email: string;
  firstName: string;
  id: number;
  isArchived: boolean | null;
  isMailed: boolean | null;
  lastName: string;
  listingId: number;
  markAsRead: boolean | null;
  message: string;
  ownedBy: string;
  phoneNumber: string;
  updatedAt: string;
}

export interface EnquiryResponse {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  data: Enquiry[];
}
