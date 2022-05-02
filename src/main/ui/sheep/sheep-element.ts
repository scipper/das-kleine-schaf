import "./sheep-element.scss";

export class SheepElement {

  private sheepElement: HTMLElement;

  constructor() {
    this.sheepElement = document.querySelector("#sheep") as HTMLElement;
  }

  updatePosition(position: { left: number, top: number }) {
    this.sheepElement.style.left = position.left + "px";
    this.sheepElement.style.top = position.top + "px";
  }

}
