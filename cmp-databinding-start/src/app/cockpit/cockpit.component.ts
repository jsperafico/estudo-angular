import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerContent = '';
  @ViewChild('serverIdInput', { static: true }) idInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(input: HTMLInputElement) {
    console.log(this.idInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(input: HTMLInputElement) {
    console.log(this.idInput.nativeElement.value);
    this.blueprintCreated.emit({
      serverName: input.value,
      serverContent: this.newServerContent
    });
  }

}

// Static True for OnInit() otherwise static should be false;
// @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef
