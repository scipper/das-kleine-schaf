import {InputHandler} from "./input/input-handler";
import {KeyCode} from "./input/key-code";

export class Sheep {

  public static readonly VELOCITY = 15;

  private position = {top: 0, left: 0};

  constructor(private inputHandler: InputHandler) {
  }

  update() {
    if(this.inputHandler.getKeyDown(KeyCode.LEFT)) {
      this.position.left -= Sheep.VELOCITY;
    }
    if(this.inputHandler.getKeyDown(KeyCode.RIGHT)) {
      this.position.left += Sheep.VELOCITY;
    }
    if(this.inputHandler.getKeyDown(KeyCode.UP)) {
      this.position.top -= Sheep.VELOCITY;
    }
    if(this.inputHandler.getKeyDown(KeyCode.DOWN)) {
      this.position.top += Sheep.VELOCITY;
    }
  }

  getPosition() {
    return {...this.position};
  }

}
