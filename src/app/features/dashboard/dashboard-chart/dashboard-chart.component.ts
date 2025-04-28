import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-chart',
  imports: [],
  templateUrl: './dashboard-chart.component.html',
  styleUrl: './dashboard-chart.component.scss'
})
export class DashboardChartComponent implements AfterViewInit{
  @ViewChild('revenueChart') revenueChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    new Chart(this.revenueChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'No. of Sales',
            data: [30, 40, 60, 50, 70, 80, 60, 90, 100, 110, 90, 95],
            borderColor: '#8a8dff',
            backgroundColor: 'rgba(138, 141, 255, 0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Revenue',
            data: [20, 30, 50, 45, 60, 70, 55, 75, 85, 90, 80, 85],
            borderColor: '#00cc66',
            backgroundColor: 'rgba(0, 204, 102, 0.2)',
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}
