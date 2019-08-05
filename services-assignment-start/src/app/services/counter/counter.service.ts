export class CounterService {

  private inactivated: number = 0;
  private activated: number = 0;

  constructor() { }

  AddActivated() {
    console.log(`Activated: ${++this.activated}, Inactivated: ${this.inactivated}`);
  }
  AddInactivated() {
    console.log(`Activated: ${this.activated}, Inactivated: ${++this.inactivated}`);
  }
}
