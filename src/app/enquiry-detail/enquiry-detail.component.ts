import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnquiriesService, Enquiry } from '../enquiries.service';

@Component({
  selector: 'app-enquiry-detail',
  standalone: true,
  imports: [],
  templateUrl: './enquiry-detail.component.html',
  styleUrl: './enquiry-detail.component.css',
})
export class EnquiryDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  enquiriesService = inject(EnquiriesService);
  enquiry: Enquiry = {} as Enquiry;
  @Input() enquiryId!: number;
  constructor(route: ActivatedRoute, enquiriesService: EnquiriesService) {}
  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.enquiryId = params['id'];
    });
    this.enquiry = await this.enquiriesService.getEnquiry(this.enquiryId);
  }
}
