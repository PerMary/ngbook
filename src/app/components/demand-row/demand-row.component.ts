import { Component,
         Input,
         HostBinding, } from '@angular/core';
import {Demand} from '../demand/demand.model';

@Component({
  selector: 'demand-row',
  templateUrl: './demand-row.component.html',
  styleUrls: ['./demand-row.component.css']
})
export class DemandRowComponent {

  @Input() demand: Demand;
  @HostBinding('attr.class') cssClass = 'item';

}
