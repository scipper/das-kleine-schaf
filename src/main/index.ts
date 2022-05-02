import "./index.scss";
import {Sheep} from "./player/sheep";
import {SheepController} from "./sheepController";
import {DocumentInputHandler} from "./ui/input/document-input-handler";
import {SheepElement} from "./ui/sheep/sheep-element";

export class DasKleineSchaf {

  constructor(private sheepController: SheepController) {
  }

  public static run() {
    const inputHandler = new DocumentInputHandler();
    const sheep = new Sheep();
    const sheepElement = new SheepElement();
    const sheepController = new SheepController(inputHandler, sheep, sheepElement);

    const dasKleineSchaf = new DasKleineSchaf(sheepController);
    dasKleineSchaf.start();
  }

  start() {
    requestAnimationFrame(this.start.bind(this));

    this.sheepController.update();
  }

}

DasKleineSchaf.run();
