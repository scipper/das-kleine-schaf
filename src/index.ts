import "./index.scss";
import {InputHandler} from "./input/input-handler";
import {Sheep} from "./sheep";

const inputHandler = new InputHandler();
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
