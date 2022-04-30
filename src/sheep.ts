import {InputHandler} from "./input/input-handler";
import "./sheep.scss";

export class Sheep {

  public static readonly VELOCITY = 15;

  private position = {top: 0, left: 0};

  constructor(private inputHandler: InputHandler) {
  }

  update() {
    if(this.inputHandler.isLeftPressed()) {
      this.position.left -= Sheep.VELOCITY;
    }
    if(this.inputHandler.isRightPressed()) {
      this.position.left += Sheep.VELOCITY;
    }
    if(this.inputHandler.isUpPressed()) {
      this.position.top -= Sheep.VELOCITY;
    }
    if(this.inputHandler.isDownPressed()) {
      this.position.top += Sheep.VELOCITY;
    }
  }

  getPosition() {
    return {...this.position};
  }

}
