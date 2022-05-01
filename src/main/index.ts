import "./index.scss";
import {DocumentInputHandler} from "./input/document-input-handler";
import {Sheep} from "./player/sheep";
import {SheepElement} from "./ui/sheep/sheep-element";

export class DasKleineSchaf {

  constructor(private sheepElement: SheepElement) {
  }

  public static run() {
    const inputHandler = new DocumentInputHandler();
    const sheepElement = new SheepElement(new Sheep(inputHandler));

    const dasKleineSchaf = new DasKleineSchaf(sheepElement);
    dasKleineSchaf.start();
  }

  start() {
    requestAnimationFrame(this.start.bind(this));

    this.sheepElement.updatePosition();
  }

}

DasKleineSchaf.run();
