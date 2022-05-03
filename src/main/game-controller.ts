import {InputHandler} from "./input/input-handler";
import {KeyCode} from "./input/key-code";
import {Sheep} from "./player/sheep";
import {SheepPositionCaretaker} from "./player/sheep-position-caretaker";
import {CollisionDetector} from "./ui/blocking/collision-detector";
import {ItemCollector} from "./ui/collectable/item-collector";
import {SheepElement} from "./ui/sheep/sheep-element";

export class GameController {

  constructor(private inputHandler: InputHandler,
              private sheep: Sheep,
              private sheepElement: SheepElement,
              private itemCollector: ItemCollector,
              private sheepPositionCaretaker: SheepPositionCaretaker,
              private collisionDetector: CollisionDetector) {
  }

  update() {
    const sheepDimensions = this.sheepElement.getSheepDimensions();
    if(this.inputHandler.getKeyDown(KeyCode.LEFT)) {
      this.sheepPositionCaretaker.backup();
      this.sheep.moveLeft();
      if(this.collisionDetector.isMovementBlocked(this.sheep.getPosition(), sheepDimensions)) {
        this.sheepPositionCaretaker.undo();
      }
    }
    if(this.inputHandler.getKeyDown(KeyCode.RIGHT)) {
      this.sheepPositionCaretaker.backup();
      this.sheep.moveRight();
      if(this.collisionDetector.isMovementBlocked(this.sheep.getPosition(), sheepDimensions)) {
        this.sheepPositionCaretaker.undo();
      }
    }
    if(this.inputHandler.getKeyDown(KeyCode.UP)) {
      this.sheepPositionCaretaker.backup();
      this.sheep.moveUp();
      if(this.collisionDetector.isMovementBlocked(this.sheep.getPosition(), sheepDimensions)) {
        this.sheepPositionCaretaker.undo();
      }
    }
    if(this.inputHandler.getKeyDown(KeyCode.DOWN)) {
      this.sheepPositionCaretaker.backup();
      this.sheep.moveDown();
      if(this.collisionDetector.isMovementBlocked(this.sheep.getPosition(), sheepDimensions)) {
        this.sheepPositionCaretaker.undo();
      }
    }

    const sheepPosition = this.sheep.getPosition();
    this.sheepElement.updatePosition(sheepPosition);
    this.itemCollector.collect(
      sheepPosition,
      sheepDimensions
    );
  }

}
