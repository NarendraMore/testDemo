import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path:'',loadChildren:()=>LoginModule
  },
  {
    path:'dashboard',loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
