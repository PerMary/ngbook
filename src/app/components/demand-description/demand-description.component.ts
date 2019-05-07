import {Component, Input,} from '@angular/core';
import {Demand} from '../demand/demand.model';

@Component({
  selector: 'demand-description',
  templateUrl: './demand-description.component.html',
  styleUrls: ['./demand-description.component.css']
})
export class DemandDescriptionComponent {

  constructor() { }

  @Input() description: string;

}
