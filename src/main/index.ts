import {GameController} from "./game-controller";
import "./index.scss";
import {Sheep} from "./player/sheep";
import {CollisionDetector} from "./ui/blocking/collision-detector";
import {ItemCollector} from "./ui/collectable/item-collector";
import {DocumentInputHandler} from "./ui/input/document-input-handler";
import {SceneElement} from "./ui/scene/scene-element";
import {SheepElement} from "./ui/sheep/sheep-element";

export class DasKleineSchaf {

  constructor(private gameController: GameController) {
  }

  public static run() {
    const inputHandler = new DocumentInputHandler();
    const sheep = new Sheep();
    const sheepElement = new SheepElement();
    const sceneElement = new SceneElement();
    const collectionHandler = new ItemCollector(sceneElement.getOffset());
    const collisionDetector = new CollisionDetector(sceneElement.getOffset());

    const sheepController = new GameController(
      inputHandler,
      sheep,
      sheepElement,
      collectionHandler,
      collisionDetector
    );

    const dasKleineSchaf = new DasKleineSchaf(sheepController);
    dasKleineSchaf.start();
  }

  start() {
    requestAnimationFrame(this.start.bind(this));

    this.gameController.update();
  }

}

DasKleineSchaf.run();
