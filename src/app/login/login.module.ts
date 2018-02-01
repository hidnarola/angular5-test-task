import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RecaptchaModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: LoginComponent },
    ]),
    NgbModule,
    FormsModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
