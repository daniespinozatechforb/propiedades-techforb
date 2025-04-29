import { cardList } from './../../core/models/card.model';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidenavComponent } from "../../shared/sidenav/sidenav.component";
import { card } from '../../core/interfaces/card.interface';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardChartComponent } from "./dashboard-chart/dashboard-chart.component";
import { DashboardDataComponent } from "./dashboard-data/dashboard-data.component";
import { DashboardMapComponent } from "./dashboard-map/dashboard-map.component";
import { DashboardTransactionsComponent } from "./dashboard-transactions/dashboard-transactions.component";
import { DashboardTopPropertiesComponent } from "./dashboard-top-properties/dashboard-top-properties.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { LoginService } from '../../core/services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavbarComponent, SidenavComponent, DashboardCardComponent, DashboardChartComponent, DashboardDataComponent, DashboardMapComponent, DashboardTransactionsComponent, DashboardTopPropertiesComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private loginService = inject (LoginService)
  username = this.loginService.user$;

  isSidenavOpen = false;

  cardList=cardList;

  onToggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
