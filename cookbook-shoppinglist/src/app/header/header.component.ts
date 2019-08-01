import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  collapsed: boolean = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(value: string) {
    this.featureSelected.emit(value);
  }

}
