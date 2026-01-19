import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, FitnessGoal, FitnessLevel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ROUTE_PATHS } from '../../../../app.paths';
import { ApiError } from '../../../../core/models/api-error.model';
import { MessageService } from '../../../../core/services/message.service';

@Component({
  selector: 'app-user-register',
  standalone: false,
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  registerForm: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  fitnessGoals = [
    { value: FitnessGoal.WEIGHT_LOSS, label: 'Emagrecimento' },
    { value: FitnessGoal.HYPERTROPHY, label: 'Hipertrofia' },
    { value: FitnessGoal.MAINTENANCE, label: 'Manutenção' }
  ];

  fitnessLevels = [
    { value: FitnessLevel.BEGINNER, label: 'Iniciante' },
    { value: FitnessLevel.INTERMEDIATE, label: 'Intermediário' },
    { value: FitnessLevel.ADVANCED, label: 'Avançado' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.min(14), Validators.max(100)]],
      weight: ['', [Validators.min(30), Validators.max(300)]],
      height: ['', [Validators.min(1.0), Validators.max(2.5)]],
      availableDaysPerWeek: ['', [Validators.min(1), Validators.max(7)]],
      fitnessGoal: [''],
      fitnessLevel: ['']
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Por favor, preencha os campos obrigatórios corretamente.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const userData: User = this.registerForm.value;

    this.authService.register(userData).subscribe({
      next: (response) => {
        this.successMessage = this.messageService.translate(response.code);
        this.loading = false;
        this.registerForm.reset();
        
        // Redirect to dashboard after 1.5 seconds (user is already logged in)
        setTimeout(() => {
          this.router.navigate([ROUTE_PATHS.dashboard]);
        }, 1500);
      },
      error: (httpError: HttpErrorResponse) => {
        const apiError = httpError.error as ApiError;

        if(apiError.error.details && apiError.error.details.length > 0) {
          this.errorMessage = apiError.error.details
            .map(err => `${err.field}: ${err.message}`)
            .join(', ');
        }
        
        this.loading = false;
      }
    });
  }
}
