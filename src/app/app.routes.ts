import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { EnquiryDetailComponent } from './enquiry-detail/enquiry-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'enquiries',
    component: EnquiriesComponent,
  },
  {
    path: 'enquiries/:id',
    component: EnquiryDetailComponent,
  },
];
