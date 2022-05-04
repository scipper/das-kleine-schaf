import "./sheep-element.scss";

export class SheepElement {

  private sheepElement: HTMLElement;
  private dimensions = {width: 0, height: 0};

  constructor() {
    this.sheepElement = document.querySelector("#sheep") as HTMLElement;
    const dimensions = this.sheepElement.getBoundingClientRect();
    this.dimensions.width = dimensions.width;
    this.dimensions.height = dimensions.height;
  }

  getSheepDimensions() {
    return this.dimensions;
  }

  updatePosition(position: { left: number, top: number }) {
    this.sheepElement.style.left = position.left + "px";
    this.sheepElement.style.top = position.top + "px";
  }

}
