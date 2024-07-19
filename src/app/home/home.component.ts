import { Component } from '@angular/core';
import {
  faArrowDown,
  faArrowUp,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, ChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  more = faEllipsisVertical;
  down = faArrowDown;
  up = faArrowUp;
}
