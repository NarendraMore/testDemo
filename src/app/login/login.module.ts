import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule, RoutingComponent } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService, SharedModule } from 'primeng/api';
import {CardModule} from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    RoutingComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CardModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    HttpClientModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    InputTextareaModule,
    FileUploadModule,
    TooltipModule,
    ImageModule,
    TableModule,
    CardModule,
    ButtonModule,
    RippleModule
  ],
  providers:[MessageService]
})
export class LoginModule { }
