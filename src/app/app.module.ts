import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsComponent } from './charts/charts.component';
import { ChildComponent } from './child/child.component';
import { DailogComponent } from './dailog/dailog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ThemeComponent } from './theme/theme.component';
import { ToastrModule } from 'ngx-toastr';
import { UserDataComponent } from './user-data/user-data.component';
import { CrudComponent } from './crud/crud.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,

    DailogComponent,
     AddProductComponent,
     AdminComponent,
     ThemeComponent,
     ChildComponent,
     MapsComponent,
     ChartsComponent,
     NotFoundComponent,
     BannerComponent,
     UserDataComponent,
     CrudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxPrintModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:'toast-top-center'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
