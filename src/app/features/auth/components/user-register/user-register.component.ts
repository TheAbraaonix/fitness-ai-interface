import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, FitnessGoal, FitnessLevel } from '../../models/user.model';

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
    { value: FitnessGoal.MUSCLE_GAIN, label: 'Hipertrofia' },
    { value: FitnessGoal.MAINTENANCE, label: 'Manutenção' }
  ];

  fitnessLevels = [
    { value: FitnessLevel.BEGINNER, label: 'Iniciante' },
    { value: FitnessLevel.INTERMEDIATE, label: 'Intermediário' },
    { value: FitnessLevel.ADVANCED, label: 'Avançado' }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService
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

    // this.userService.createUser(userData).subscribe({
    //   next: (response) => {
    //     this.successMessage = `Usuário ${response.name} criado com sucesso!`;
    //     this.registerForm.reset();
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     this.errorMessage = error.error?.message || 'Erro ao criar usuário';
    //     this.loading = false;
    //   }
    // });

    console.log('User Data:', userData);
  }
}
