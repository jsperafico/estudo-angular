import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() coutEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() count: number = 0;
  private interval:any;

  constructor() { }

  ngOnInit() {
  }

  private run() {
    this.interval = setInterval(() => {
      this.coutEmitter.emit(this.count++);
    }, 1000);
  }

  Start() {
    this.run(); 
  }

  Stop() {
    clearInterval(this.interval);
  }

}
