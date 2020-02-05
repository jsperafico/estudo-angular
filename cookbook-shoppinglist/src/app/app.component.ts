import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookbook-shoppinglist';

  @Output() navigate: string;

  onNavigate(value: string) {
    this.navigate = value;
  }
}
