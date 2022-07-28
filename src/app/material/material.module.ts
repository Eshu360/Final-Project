import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const materialComponents=[
                    MatSidenavModule,
                    MatToolbarModule,
                    MatIconModule,
                    MatListModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatInputModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatRadioModule,
                    MatSelectModule,
                    MatSortModule,
                    MatTableModule
]


@NgModule({
  exports:[materialComponents],
  imports: [materialComponents]
})
export class MaterialModule { }
