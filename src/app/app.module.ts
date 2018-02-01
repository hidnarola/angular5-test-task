import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { 
        path: 'dashboard', 
        component: DashboardLayoutComponent,
        children: [
          { 
            path: '', 
            loadChildren: './dashboard-layout/dashboard/dashboard.module#DashboardModule', 
          }]
      },
      { 
        path: '', 
        loadChildren: './login/login.module#LoginModule',
      },
      { 
        path: 'details', 
        loadChildren: './userdetails/userdetails.module#UserdetailsModule',
      }
    ], { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
