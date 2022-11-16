import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { BannerComponent } from './banner/banner.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleGuard } from './services/role.guard';
import { SignupComponent } from './signup/signup.component';
import { ThemeComponent } from './theme/theme.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  { path: '', component: BannerComponent, pathMatch: 'full' },
  { path: 'banner', component: BannerComponent, pathMatch: 'full' },
  //  {path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],

    children: [
      { path: 'product', component: AddProductComponent, canActivate: [AuthGuard] },
      { path: 'admin', component: AdminComponent, canActivate: [RoleGuard] },
      { path: 'theme', component: ThemeComponent, canActivate: [AuthGuard] },
      { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
      {
        path: 'charts', component: ChartsComponent, canActivate: [AuthGuard],

        children: [
          { path: 'barchart', component: BarChartComponent },
          { path: 'piechart', component: PieChartComponent },
          { path: 'linechart', component: LineChartComponent }
        ]

      },

    ]


  },


  { path: "**", component: NotFoundComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
