import { Component,
         EventEmitter,
         Input,
         Output,} from '@angular/core';
import {Demand} from './demand.model';

@Component({
  selector: 'demands-list',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent {

  @Input() demandList: Demand[];


  @Output() onDemandSelected: EventEmitter<Demand>;

  private currentDemand: Demand;

  constructor (){
    this.onDemandSelected = new EventEmitter();
  }

  clicked(demand: Demand): void{
    this.currentDemand = demand;
    this.onDemandSelected.emit(demand);
  }

  isSelected(demand: Demand):boolean{
    if(!demand || !this.currentDemand){
      return false;
    }
    return demand.id === this.currentDemand.id;
  }
}
