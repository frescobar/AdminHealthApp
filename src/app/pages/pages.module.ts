import { RouterModule} from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from "../components/components.module";





@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
  ],
  imports: [
  CommonModule,
    SharedModule,
    RouterModule
    ,FormsModule,
    ComponentsModule,

  ],
  exports: [PagesComponent,ProgressComponent,
    Grafica1Component,
DashboardComponent,]
})
export class PagesModule { }
