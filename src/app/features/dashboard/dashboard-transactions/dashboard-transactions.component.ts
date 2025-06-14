import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-transactions',
  imports: [NgFor,CommonModule],
  templateUrl: './dashboard-transactions.component.html',
  styleUrl: './dashboard-transactions.component.scss'
})
export class DashboardTransactionsComponent {
  transactions = [
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Mr. Cristino',
      price: '$12450',
      type: 'Venta',
      paid: false,
    },
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Mr. Jack',
      price: '$12450',
      type: 'Venta',
      paid: true,
    },
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Ms. Cally',
      price: '$12450',
      type: 'Venta',
      paid: false,
    },
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Ms. Cristina',
      price: '$1245/M',
      type: 'Alquiler',
      paid: false,
    },
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Mr. Jack',
      price: '$12450',
      type: 'Venta',
      paid: true,
    },
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Ms. Cally',
      price: '$12450',
      type: 'Venta',
      paid: false,
    },
    {
      image: 'assets/casa.jpg',
      date: '10/08/2023',
      name: 'Ms. Cristina',
      price: '$1245/M',
      type: 'Alquiler',
      paid: false,
    }
  ];
}
