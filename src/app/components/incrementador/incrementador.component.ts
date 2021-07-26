import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent  {

  @Input() progress = 40;
  @Input() btnColor = "btn btn-primary";
  @Output() outputValue = new EventEmitter<number>()



  changeProgress(value:number){
    if(this.progress >= 100 && value >=0) {
      this.outputValue.emit(100)
      this.progress = 100
    }
    if(this.progress <=0 && value < 0){
      this.outputValue.emit(0)
      this.progress = 0
    }
     this.progress += value
     this.outputValue.emit(this.progress)

  }
  onChange(value:number){
    if(value<= 100){
      this.outputValue.emit(value)
    }
    else{
      this.outputValue.emit(this.progress)
    }

  }


}

