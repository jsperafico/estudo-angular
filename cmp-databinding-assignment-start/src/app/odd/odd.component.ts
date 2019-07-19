import { Component, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isUndefined } from 'util';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnChanges {

  @Output() array: number[] = [];
  @Input() currentValue: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (isUndefined(changes.currentValue) || isUndefined(changes.currentValue.previousValue)) {
      return;
    }
    if (this.currentValue == 1 || this.currentValue % 2 != 0) {
      this.array.push(this.currentValue);
    }
  }

}
