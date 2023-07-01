import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiModule } from '../api/api.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthMenuButtonComponent } from './auth-menu-button/auth-menu-button.component';
import { AuthMenuUserComponent } from './auth-menu-button/auth-menu-user/auth-menu-user.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';

const entryComponents = [AuthMenuUserComponent, AuthMenuButtonComponent, AuthLoginComponent, AuthRegisterComponent];
const components = [...entryComponents];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, ApiModule],
  entryComponents: entryComponents,
  declarations: components,
  exports: components,
  providers: [],
})
export class AuthModule {}
