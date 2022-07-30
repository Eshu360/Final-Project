import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './services/auth.guard';
import { BannerComponent } from './banner/banner.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import {RoleGuard} from './services/role.guard';
import { SignupComponent } from './signup/signup.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path:'',component:BannerComponent,pathMatch:'full'},
//  {path:'', redirectTo:'login', pathMatch:'full'},
 {path:'login', component: LoginComponent},
 {path:'signup', component:SignupComponent},
 {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
 {path:'product',component:AddProductComponent,canActivate:[AuthGuard]},
 {path:'admin',component:AdminComponent , canActivate:[RoleGuard]},
 {path:'theme',component:ThemeComponent,canActivate:[AuthGuard]},
 {path:'maps',component:MapsComponent,canActivate:[AuthGuard]},
 {path:'charts',component:ChartsComponent,canActivate:[AuthGuard]},
 {path:"**", component:NotFoundComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
