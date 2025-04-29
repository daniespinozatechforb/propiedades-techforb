import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  private dialogRef = inject(MatDialogRef<ModalComponent>);
  private loginService = inject(LoginService);

  login(user: string): void {
    this.loginService.login(user);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
