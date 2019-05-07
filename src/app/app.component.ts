import { Component, EventEmitter } from '@angular/core';
import {Demand} from './components/demand/demand.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  demands: Demand[];

  constructor() {
    this.demands = [
      new Demand(
        1,
        '06.05.2019 16:43',
        'Иванов И.И.',
        'Закупка для проекта "Истоник И1'
      ),
      new Demand(
        2,
        '06.05.2019 16:56',
        'Михайлов М.М.',
        'Какое-то название'
      )
    ];
  }

  // demandWasSelected(demand: Demand): void {
  //   console.log('Demand clicked: ', demand);
  // }

}

