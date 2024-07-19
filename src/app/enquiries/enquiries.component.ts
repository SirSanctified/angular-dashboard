import { Component, inject } from '@angular/core';
import { EnquiriesService, Enquiry } from '../enquiries.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.css',
})
export class EnquiriesComponent {
  enquiriesService = inject(EnquiriesService);
  enquiries: Enquiry[] = [];
  constructor(enquiriesService: EnquiriesService) {}

  async ngOnInit() {
    const enquiriesResponse = await this.enquiriesService.getEnquiries();
    this.enquiries = enquiriesResponse.data;
  }
}
