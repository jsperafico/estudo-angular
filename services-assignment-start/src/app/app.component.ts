import { Component } from '@angular/core';
import { UsersService } from './services/users/users.service';
import { CounterService } from './services/counter/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {
}
