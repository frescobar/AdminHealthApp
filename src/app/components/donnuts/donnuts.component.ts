import { Component, Input} from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donnuts',
  templateUrl: './donnuts.component.html',
  styles: [
  ]
})
export class DonnutsComponent {

  @Input() titulo:string = "Sin titulo";

   @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

   @Input()data: number[] =  [350, 450, 100];
  //  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  //  public doughnutChartData: MultiDataSet = [
  //    [350, 450, 100],
  //  ];

   public colors: Color[]=[
    { backgroundColor: ["#6857E6","#009FEE", "#F02759"]}
   ]

}
