import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TravelerMainRoutingModule } from './traveler-main-routing.module';
import { ValidationInterceptor } from '../validation.interceptor';
import { UserComponent } from './User/user/user.component';
import { BaseComponent } from './base/base.component';
import { ColorTableComponent } from '../shared/color-table/color-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    UserComponent,
    BaseComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TravelerMainRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidationInterceptor,
      multi: true,
    }
  ],
})
export class TravelerMainModule { }
