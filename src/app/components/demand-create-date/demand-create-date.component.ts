import { Component, Input } from '@angular/core';
import {Demand} from '../demand/demand.model';

@Component({
  selector: 'demand-create-date',
  templateUrl: './demand-create-date.component.html',
  styleUrls: ['./demand-create-date.component.css']
})
export class DemandCreateDateComponent {

  constructor() { }

  @Input() date: string;
}
