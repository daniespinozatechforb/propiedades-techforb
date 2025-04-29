import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SelectComponent } from "../../../shared/select/select.component";

@Component({
  selector: 'app-dashboard-data',
  imports: [NgFor, SelectComponent],
  templateUrl: './dashboard-data.component.html',
  styleUrl: './dashboard-data.component.scss'
})
export class DashboardDataComponent {
  salesData = [
    { label: 'Via Website', value: 50 },
    { label: 'Via Miembro Equipo', value: 12 },
    { label: 'Via Agentes', value: 6 },
    { label: 'Via Redes Sociales', value: 15 },
    { label: 'Via Marketing Digital', value: 12 },
    { label: 'Otros', value: 5 }
  ];
}
