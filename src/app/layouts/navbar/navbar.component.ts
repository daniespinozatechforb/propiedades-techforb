import { Component, inject } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../core/services/login.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  readonly dialog = inject(MatDialog);
  readonly loginService = inject(LoginService);
  user$ = this.loginService.user$;
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  openDialogLogin(enterAnimationDuration: string, exitAnimationDuration: string):void{
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: "login",
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    })
  }

}
