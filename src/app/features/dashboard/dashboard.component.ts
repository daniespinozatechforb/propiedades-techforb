import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidenavComponent } from "../../shared/sidenav/sidenav.component";
import { card } from '../../core/interfaces/card.interface';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, SidenavComponent, DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  username:String = "Daniel";

  isSidenavOpen = false;

  cardList:card[]=[
    {
      title:"Total revenue",
      amount:45890
    },
    {
      title:"Total revenue",
      amount:45890
    },
    {
      title:"Total revenue",
      amount:45890
    },
    {
      title:"Total revenue",
      amount:45890
    },
    {
      title:"Total revenue",
      amount:45890
    }
  ]

  onToggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
