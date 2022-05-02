import {InputHandler} from "./input/input-handler";
import {KeyCode} from "./input/key-code";
import {Sheep} from "./player/sheep";
import {SheepElement} from "./ui/sheep/sheep-element";

export class SheepController {

  constructor(private inputHandler: InputHandler,
              private sheep: Sheep,
              protected sheepElement: SheepElement) {
  }

  update() {
    if(this.inputHandler.getKeyDown(KeyCode.LEFT)) {
      this.sheep.moveLeft();
    }
    if(this.inputHandler.getKeyDown(KeyCode.RIGHT)) {
      this.sheep.moveRight();
    }
    if(this.inputHandler.getKeyDown(KeyCode.UP)) {
      this.sheep.moveUp();
    }
    if(this.inputHandler.getKeyDown(KeyCode.DOWN)) {
      this.sheep.moveDown();
    }

    this.sheepElement.updatePosition(this.sheep.getPosition());
  }

}
