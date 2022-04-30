export class InputHandler {

  private readonly keyDownListener?: (event: KeyboardEvent) => void;
  private readonly keyUpListener?: (event: KeyboardEvent) => void;
  private left = false;
  private right = false;
  private up = false;
  private down = false;

  constructor() {
    this.keyDownListener = (event: KeyboardEvent) => this.keyDown(event);
    this.keyUpListener = (event: KeyboardEvent) => this.keyUp(event);
    document.addEventListener("keydown", this.keyDownListener);
    document.addEventListener("keyup", this.keyUpListener);
  }

  isLeftPressed() {
    return this.left;
  }

  isRightPressed() {
    return this.right;
  }

  isUpPressed() {
    return this.up;
  }

  isDownPressed() {
    return this.down;
  }

  private keyDown(event: KeyboardEvent) {
    if(event.code === "ArrowRight") {
      this.right = true;
      this.left = false;
    }
    if(event.code === "ArrowLeft") {
      this.left = true;
      this.right = false;
    }
    if(event.code === "ArrowUp") {
      this.up = true;
      this.down = false;
    }
    if(event.code === "ArrowDown") {
      this.down = true;
      this.up = false;
    }
  }

  private keyUp(event: KeyboardEvent) {
    if(event.code === "ArrowRight") {
      this.right = false;
    }
    if(event.code === "ArrowLeft") {
      this.left = false;
    }
    if(event.code === "ArrowUp") {
      this.up = false;
    }
    if(event.code === "ArrowDown") {
      this.down = false;
    }
  }

}
