import {InputHandler} from "../../input/input-handler";
import {KeyCode} from "../../input/key-code";

export class DocumentInputHandler implements InputHandler {

  private readonly keyMap: { [key: string]: number } = {
    "ArrowLeft": KeyCode.LEFT,
    "ArrowRight": KeyCode.RIGHT,
    "ArrowUp": KeyCode.UP,
    "ArrowDown": KeyCode.DOWN
  };

  private readonly keyDownListener?: (event: KeyboardEvent) => void;
  private readonly keyUpListener?: (event: KeyboardEvent) => void;
  private keysPressed: { [key: string]: boolean | undefined } = {};

  constructor() {
    this.keyDownListener = (event: KeyboardEvent) => this.keyDown(event);
    this.keyUpListener = (event: KeyboardEvent) => this.keyUp(event);
    document.addEventListener("keydown", this.keyDownListener);
    document.addEventListener("keyup", this.keyUpListener);
  }

  getKeyDown(key: KeyCode) {
    return !!this.keysPressed[key];
  }

  private keyDown(event: KeyboardEvent) {
    if(this.keyMap.hasOwnProperty(event.code)) {
      this.keysPressed[this.keyMap[event.code]] = true;
    }
  }

  private keyUp(event: KeyboardEvent) {
    if(this.keyMap.hasOwnProperty(event.code)) {
      this.keysPressed[this.keyMap[event.code]] = false;
    }
  }

}
