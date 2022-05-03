export class SheepMemento {

  constructor(private position: { top: number, left: number }) {
  }

  getPosition() {
    return {...this.position};
  }

}
