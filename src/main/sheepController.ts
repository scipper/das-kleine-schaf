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

    const sheepPosition = this.sheep.getPosition();
    this.sheepElement.updatePosition(sheepPosition);

    const collectables = [
      ...document.elementsFromPoint(sheepPosition.left, sheepPosition.top),
      ...document.elementsFromPoint(sheepPosition.left + 100, sheepPosition.top),
      ...document.elementsFromPoint(sheepPosition.left, sheepPosition.top + 100),
      ...document.elementsFromPoint(sheepPosition.left + 100, sheepPosition.top + 100)
    ];
    collectables.forEach((collectable) => {
      if(collectable.classList.contains("collectable")) {
        collectable.remove();
      }
    });
  }

}
