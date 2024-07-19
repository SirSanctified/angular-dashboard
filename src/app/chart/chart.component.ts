import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            data: [200, 160, 100, 210, 220, 130, 150, 148, 150, 120, 100, 23],
            borderColor: 'rgba(13, 110, 253, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0.075)',
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
          },
          {
            data: [160, 25, 170, 24, 10, 13, 14, 16, 4, 55, 140, 23],
            borderColor: 'rgb(12, 83, 50)',
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        elements: {
          line: {
            cubicInterpolationMode: 'monotone',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.2)',
            },
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0)',
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            bodyFont: {
              size: 14,
            },
            titleFont: {
              size: 16,
              weight: 'bold',
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
