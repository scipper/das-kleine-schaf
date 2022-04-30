import {InputHandler} from "./input/input-handler";
import "./sheep.scss";

export class Sheep {

  private sheep?: HTMLElement | null;

  constructor(private inputHandler: InputHandler) {
    // element selection
    this.selectElement();
  }

  update() {
    if(this.inputHandler.isLeftPressed()) {
      this.decrease("left");
    }
    if(this.inputHandler.isRightPressed()) {
      this.increase("left");
    }
    if(this.inputHandler.isUpPressed()) {
      this.decrease("top");
    }
    if(this.inputHandler.isDownPressed()) {
      this.increase("top");
    }
  }

  private selectElement() {
    this.sheep = document.querySelector("#sheep")!;
  }

  // move
  private increase(direction: "left" | "top") {
    if(this.sheep) {
      this.sheep.style[direction] = (Number(this.sheep.style[direction].replace(/(px)$/, "")) + 15) + "px";
    }
  }

  // move
  private decrease(direction: "left" | "top") {
    if(this.sheep) {
      this.sheep.style[direction] = (Number(this.sheep.style[direction].replace(/(px)$/, "")) - 15) + "px";
    }
  }

}
