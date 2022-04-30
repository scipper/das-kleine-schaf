import "./index.scss";
import {InputHandler} from "./input/input-handler";
import {Sheep} from "./sheep";

const inputHandler = new InputHandler();
const sheep = new Sheep(inputHandler);

function animate() {
  requestAnimationFrame(animate);

  sheep.update();
}

animate();
