import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidenavComponent } from "../../shared/sidenav/sidenav.component";
import { card } from '../../core/interfaces/card.interface';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardChartComponent } from "./dashboard-chart/dashboard-chart.component";
import { DashboardDataComponent } from "./dashboard-data/dashboard-data.component";
import { DashboardMapComponent } from "./dashboard-map/dashboard-map.component";
import { DashboardTransactionsComponent } from "./dashboard-transactions/dashboard-transactions.component";
import { DashboardTopPropertiesComponent } from "./dashboard-top-properties/dashboard-top-properties.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, SidenavComponent, DashboardCardComponent, DashboardChartComponent, DashboardDataComponent, DashboardMapComponent, DashboardTransactionsComponent, DashboardTopPropertiesComponent],
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
