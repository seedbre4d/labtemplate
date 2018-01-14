import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [UserLoginComponent, UserRegisterComponent, UserEditComponent]
})
export class UserModule { }
