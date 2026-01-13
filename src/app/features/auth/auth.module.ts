import { NgModule } from "@angular/core";
import { UserRegisterComponent } from "./components/user-register/user-register.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: []
})
export class AuthModule {}