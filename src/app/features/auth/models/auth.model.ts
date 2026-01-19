import { FitnessGoal, FitnessLevel, UserResponse } from "./user.model";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  age?: number;
  height?: number;
  weight?: number;
  availableDaysPerWeek?: number;
  fitnessGoal?: FitnessGoal;
  fitnessLevel?: FitnessLevel;
}

export interface LoginResponse {
  token: string;
  type: string;
  userId: string;
  name: string;
  email: string;
  role: string;
}