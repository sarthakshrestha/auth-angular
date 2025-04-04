import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check if user is logged in on service initialization
    const token = localStorage.getItem('token');
    this.isAuthenticatedSubject.next(!!token);
  }

  login(credentials: { username: string; password: string }): void {
    // Implement your login logic here
    // For demo purposes, we'll just set a dummy token
    localStorage.setItem('token', 'dummy_token');
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
