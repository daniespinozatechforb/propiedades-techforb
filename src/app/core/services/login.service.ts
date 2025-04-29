import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSubject = new BehaviorSubject<string | null>(localStorage.getItem('user'));
  user$ = this.userSubject.asObservable();

  login(user: string): void {
    localStorage.setItem('user', user);
    this.userSubject.next(user);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  get currentUser(): string | null {
    return this.userSubject.value;
  }

  get isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
