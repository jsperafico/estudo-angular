import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  serverCreationStatus: string = '';
  serverName: string = '';
  servers: string[] = [];

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
  }

  getColor() {
    return (this.serverName.length > 5)? 'green' : 'red';
  }

  constructor() {
    
  }

  ngOnInit() {
  }

}
