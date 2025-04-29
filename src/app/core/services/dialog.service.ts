import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _loginDialogVisible = signal(false);

  get loginDialogVisible() {
    return this._loginDialogVisible.asReadonly();
  }

  openLoginDialog() {
    this._loginDialogVisible.set(true);
  }

  closeLoginDialog() {
    this._loginDialogVisible.set(false);
  }
}
