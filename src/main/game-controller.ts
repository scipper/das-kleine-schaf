import {InputHandler} from "./input/input-handler";
import {KeyCode} from "./input/key-code";
import {Sheep} from "./player/sheep";
import {CollisionDetector} from "./ui/blocking/collision-detector";
import {ItemCollector} from "./ui/collectable/item-collector";
import {SheepElement} from "./ui/sheep/sheep-element";

export class GameController {

  constructor(private inputHandler: InputHandler,
              private sheep: Sheep,
              private sheepElement: SheepElement,
              private itemCollector: ItemCollector,
              private collisionDetector: CollisionDetector) {
  }

  update() {
    const sheepDimensions = this.sheepElement.getSheepDimensions();
    if(this.inputHandler.getKeyDown(KeyCode.LEFT) &&
      this.collisionDetector.isAllowedToMovement(this.sheep.getPosition(), sheepDimensions, {
        top: 0,
        left: -Sheep.VELOCITY
      })) {
      this.sheep.moveLeft();
    }
    if(this.inputHandler.getKeyDown(KeyCode.RIGHT) &&
      this.collisionDetector.isAllowedToMovement(this.sheep.getPosition(), sheepDimensions, {
        top: 0,
        left: Sheep.VELOCITY
      })) {
      this.sheep.moveRight();
    }
    if(this.inputHandler.getKeyDown(KeyCode.UP) &&
      this.collisionDetector.isAllowedToMovement(this.sheep.getPosition(), sheepDimensions, {
        top: -Sheep.VELOCITY,
        left: 0
      })) {
      this.sheep.moveUp();
    }
    if(this.inputHandler.getKeyDown(KeyCode.DOWN) &&
      this.collisionDetector.isAllowedToMovement(this.sheep.getPosition(), sheepDimensions, {
        top: Sheep.VELOCITY,
        left: 0
      })) {
      this.sheep.moveDown();
    }

    const sheepPosition = this.sheep.getPosition();
    this.sheepElement.updatePosition(sheepPosition);
    this.itemCollector.collect(
      sheepPosition,
      sheepDimensions
    );
  }

}
