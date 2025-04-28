import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-top-properties',
  imports: [NgFor,CommonModule],
  templateUrl: './dashboard-top-properties.component.html',
  styleUrl: './dashboard-top-properties.component.scss'
})
export class DashboardTopPropertiesComponent {
  properties = [
    {
      name: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      image: 'assets/casa.jpg', // después lo podés cambiar a imágenes reales
      trend: 12.5,
    },
    {
      name: 'Modern Apartment',
      location: 'New York, NY',
      image: 'assets/casa.jpg',
      trend: -3.2,
    },
    {
      name: 'Cozy Cottage',
      location: 'Aspen, CO',
      image: 'assets/casa.jpg',
      trend: 5.1,
    },
    {
      name: 'Beach House',
      location: 'Malibu, CA',
      image: 'assets/casa.jpg',
      trend: 8.3,
    },
    {
      name: 'Urban Loft',
      location: 'Chicago, IL',
      image: 'assets/casa.jpg',
      trend: -1.7,
    },
    {
      name: 'Mountain Retreat',
      location: 'Lake Tahoe, NV',
      image: 'assets/casa.jpg',
      trend: 4.9,
    },
    {
      name: 'Penthouse Suite',
      location: 'Miami, FL',
      image: 'assets/casa.jpg',
      trend: 6.7,
    },
  ];
}
