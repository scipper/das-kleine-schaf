import {SheepMemento} from "./sheep-memento";

export class Sheep {

  public static readonly VELOCITY = 5;

  private position = {top: 0, left: 0};

  moveLeft() {
    this.position.left -= Sheep.VELOCITY;
  }

  moveRight() {
    this.position.left += Sheep.VELOCITY;
  }

  moveUp() {
    this.position.top -= Sheep.VELOCITY;
  }

  moveDown() {
    this.position.top += Sheep.VELOCITY;
  }

  getPosition() {
    return {...this.position};
  }

  save() {
    return new SheepMemento(this.getPosition());
  }

  restore(sheepMemento: SheepMemento) {
    this.position = sheepMemento.getPosition();
  }

}
