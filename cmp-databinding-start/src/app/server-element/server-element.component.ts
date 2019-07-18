import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {

  @Input('srvElement') elemento: {type: string, name: string, content:string};

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('Do Check');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngOnDestroy() {
    console.log('OnDestroy called');
  }
}
