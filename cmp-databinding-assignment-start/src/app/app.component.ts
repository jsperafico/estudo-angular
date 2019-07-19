import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() currentValue: number;

  changedCount(data: number) {
    this.currentValue = data;
  }
}
