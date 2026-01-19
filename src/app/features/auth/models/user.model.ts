export enum FitnessGoal {
  HYPERTROPHY = 'HYPERTROPHY',
  WEIGHT_LOSS = 'WEIGHT_LOSS',
  MAINTENANCE = 'MAINTENANCE'
}

export enum FitnessLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED'
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  age?: number;
  weight?: number;
  height?: number;
  availableDaysPerWeek?: number;
  fitnessGoal?: FitnessGoal;
  fitnessLevel?: FitnessLevel;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  age?: number;
  weight?: number;
  height?: number;
  availableDaysPerWeek?: number;
  fitnessGoal?: FitnessGoal;
  fitnessLevel?: FitnessLevel;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
