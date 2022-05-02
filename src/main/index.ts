import {GameController} from "./gameController";
import "./index.scss";
import {Sheep} from "./player/sheep";
import {CollectableHandler} from "./ui/collectable/collectable-handler";
import {DocumentInputHandler} from "./ui/input/document-input-handler";
import {SheepElement} from "./ui/sheep/sheep-element";

export class DasKleineSchaf {

  constructor(private sheepController: GameController) {
  }

  public static run() {
    const inputHandler = new DocumentInputHandler();
    const sheep = new Sheep();
    const sheepElement = new SheepElement();
    const collectionHandler = new CollectableHandler();
    const sheepController = new GameController(inputHandler, sheep, sheepElement, collectionHandler);

    const dasKleineSchaf = new DasKleineSchaf(sheepController);
    dasKleineSchaf.start();
  }

  start() {
    requestAnimationFrame(this.start.bind(this));

    this.sheepController.update();
  }

}

DasKleineSchaf.run();
