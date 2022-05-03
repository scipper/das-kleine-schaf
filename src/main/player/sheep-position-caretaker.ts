import {Sheep} from "./sheep";
import {SheepMemento} from "./sheep-memento";

export class SheepPositionCaretaker {

  private sheepMementos: SheepMemento[] = [];

  constructor(private sheep: Sheep) {
  }

  backup() {
    this.sheepMementos.push(this.sheep.save());
  }

  public undo(): void {
    const memento = this.sheepMementos.pop();
    if(memento) {
      this.sheep.restore(memento);
    }
  }

}
