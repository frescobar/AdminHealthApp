import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonnutsComponent } from './donnuts/donnuts.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonnutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ChartsModule

  ],
  exports:[IncrementadorComponent,DonnutsComponent]
})
export class ComponentsModule { }
