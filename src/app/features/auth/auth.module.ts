import { NgModule } from "@angular/core";
import { UserRegisterComponent } from "./components/user-register/user-register.component";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserRegisterComponent, LoginComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  exports: []
})
export class AuthModule {}