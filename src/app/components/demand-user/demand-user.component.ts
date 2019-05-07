import { Component, Input, } from '@angular/core';
import {Demand} from '../demand/demand.model';

@Component({
  selector: 'demand-user',
  templateUrl: './demand-user.component.html',
  styleUrls: ['./demand-user.component.css']
})
export class DemandUserComponent {

  @Input() user: string;
}


