import { Injectable } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Injectable()
export class UsersService {

  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counter: CounterService) { }

  setUserToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter.AddActivated();
  }

  setUserToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.AddInactivated();
  }
}
