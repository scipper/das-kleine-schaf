import {Sheep} from "../../player/sheep";
import "./sheep-element.scss";

export class SheepElement {

  private sheepElement: HTMLElement;

  constructor(private sheep: Sheep) {
    this.sheepElement = document.querySelector("#sheep") as HTMLElement;
  }

  updatePosition() {
    this.sheep.update();
    const sheepPosition = this.sheep.getPosition();
    this.sheepElement.style.left = sheepPosition.left + "px";
    this.sheepElement.style.top = sheepPosition.top + "px";
  }

}
