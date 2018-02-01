import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserdetailsComponent },
    ]),
  ],

  declarations: [UserdetailsComponent]
})
export class UserdetailsModule { }
