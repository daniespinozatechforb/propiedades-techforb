import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() isOpen = false;

  sidenavContent:string[]=[
    'Dashboard',
    'Perfil',
    'Propiedades',
    'Clientes',
    'Analiticas',
    'Mapa',
    'Contacto',
    'Inicio',
    'Cerrar Sesion'
  ]
}
