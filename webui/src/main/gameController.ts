import {InputHandler} from "./input/input-handler";
import {KeyCode} from "./input/key-code";
import {Sheep} from "./player/sheep";
import {CollectableHandler} from "./ui/collectable/collectable-handler";
import {SheepElement} from "./ui/sheep/sheep-element";

export class GameController {

  constructor(private inputHandler: InputHandler,
              private sheep: Sheep,
              protected sheepElement: SheepElement,
              private collectableHandler: CollectableHandler) {
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

    const sheepPosition = this.sheep.getPosition();
    this.sheepElement.updatePosition(sheepPosition);
    this.collectableHandler.detectCollectableCollision(
      sheepPosition,
      this.sheepElement.getSheepDimensions()
    );
  }

}
