import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth.model';
import { ApiError } from '../../../../core/models/api-error.model';
import { ROUTE_PATHS } from '../../../../app.paths';
import { MessageService } from '../../../../core/services/message.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const credentials: LoginRequest = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('✅ Login bem-sucedido:', response.data);
          this.successMessage = this.messageService.translate(response.code);
          this.loading = false;
          
          // Redirect after 1.5 seconds
          setTimeout(() => {
            this.router.navigate([ROUTE_PATHS.dashboard]);
          }, 1500);
        },
        error: (httpError: HttpErrorResponse) => {
          const apiError = httpError.error as ApiError;
          
          // Handle validation errors
          if (apiError.error?.details && apiError.error.details.length > 0) {
            this.errorMessage = apiError.error.details
              .map(err => `${err.field}: ${err.message}`)
              .join(', ');
          } else {
            this.errorMessage = this.messageService.translate(apiError.error.code);
          }
          
          this.loading = false;
        }
      });
    } else {
      // Mark all fields as touched to show errors
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  // Getters para facilitar acesso no template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
