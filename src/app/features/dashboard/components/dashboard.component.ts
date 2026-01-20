import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { LoginResponse } from '../../auth/models/auth.model';
import { ROUTE_PATHS } from '../../../app.paths';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: LoginResponse | null = null;
  
  // Mock statistics
  stats = {
    workouts: 0,
    exercises: 0,
    progress: 0
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData(): void {
    this.currentUser = this.authService.getCurrentUser();
    
    if (!this.currentUser) {
      // Fallback: if no user data, redirect to login
      this.router.navigate([ROUTE_PATHS.login]);
    }
  }

  protected onLogout(): void {
    this.authService.logout();
  }

  get firstName(): string {
    return this.currentUser!.name.split(' ')[0];
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
