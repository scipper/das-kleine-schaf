import "./index.scss";
import {DocumentInputHandler} from "./input/document-input-handler";
import {Sheep} from "./sheep";
import "./sheep.scss";

const inputHandler = new DocumentInputHandler();
const sheep = new Sheep(inputHandler);
const sheepElement = document.querySelector("#sheep") as HTMLElement;

function animate() {
  requestAnimationFrame(animate);

  sheep.update();
  const sheepPosition = sheep.getPosition();
  sheepElement.style.left = sheepPosition.left + "px";
  sheepElement.style.top = sheepPosition.top + "px";
}

animate();
