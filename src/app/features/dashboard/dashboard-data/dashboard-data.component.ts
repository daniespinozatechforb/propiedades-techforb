import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-data',
  imports: [NgFor],
  templateUrl: './dashboard-data.component.html',
  styleUrl: './dashboard-data.component.scss'
})
export class DashboardDataComponent {
  salesData = [
    { label: 'Via Website', value: 50 },
    { label: 'Via Team Member', value: 12 },
    { label: 'Via Agents', value: 6 },
    { label: 'Via Social Media', value: 15 },
    { label: 'Via Digital Marketing', value: 12 },
    { label: 'Via Others', value: 5 }
  ];
}
