import "./sheep.scss";

export class Sheep {

  private readonly sheep: HTMLElement;
  private readonly keyDownListener: (event: KeyboardEvent) => void;

  constructor() {
    this.sheep = document.querySelector("#sheep")!;
    this.keyDownListener = (event: KeyboardEvent) => this.keyDown(event);
    document.addEventListener("keydown", this.keyDownListener);
  }

  private keyDown(event: KeyboardEvent) {
    if(event.code === "ArrowRight") {
      this.increase("left");
    }
    if(event.code === "ArrowLeft") {
      this.decrease("left");
    }
    if(event.code === "ArrowUp") {
      this.decrease("top");
    }
    if(event.code === "ArrowDown") {
      this.increase("top");
    }
  }

  private increase(direction: "left" | "top") {
    this.sheep.style[direction] = (Number(this.sheep.style[direction].replace(/(px)$/, "")) + 15) + "px";
  }

  private decrease(direction: "left" | "top") {
    this.sheep.style[direction] = (Number(this.sheep.style[direction].replace(/(px)$/, "")) - 15) + "px";
  }

}
