import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './header/header.component';
import { ImageModule } from 'primeng/image';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ImageModule
  ]
})
export class DashboardModule { }
