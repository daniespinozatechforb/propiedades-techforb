import { Component, inject, Input } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() isOpen = false;
  private loginService = inject(LoginService);
  private router = inject(Router);

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

  logout() {
    this.loginService.logout();
    this.isOpen = false;
    this.router.navigate(['/home']);
  }
}
