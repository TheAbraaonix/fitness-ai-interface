import { Injectable } from "@angular/core";
import { environment } from "../../../enviroments/enviroment";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginRequest, LoginResponse, RegisterRequest } from "../models/auth.model";
import { ApiResponse } from "../../../core/models/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public register(userData: RegisterRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/register`, userData)
    .pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setSession(response.data);
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  public login(credentials: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if(response.success && response.data) {
            this.setSession(response.data);
            this.isAuthenticatedSubject.next(true);
          }
        })
      );
  }

  public logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return this.hasToken();
  }
  
  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public getCurrentUser(): LoginResponse | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) as LoginResponse : null;
  }

  public getCurrentUserId(): string | null {
    const user = this.getCurrentUser();
    return user ? user.userId : null;
  }

  public isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === 'ADMIN' : false;
  }
  
  private setSession(authResult: LoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, authResult.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResult));
  }
  
  private hasToken(): boolean {
    return !!this.getToken();
  }
}