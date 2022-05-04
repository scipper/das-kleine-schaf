import "./scene-element.scss";

export class SceneElement {

  private sceneElement: HTMLElement;

  constructor() {
    this.sceneElement = document.querySelector("#scene") as HTMLElement;
  }

  getOffset() {
    const dimensions = this.sceneElement.getBoundingClientRect();

    return {
      x: dimensions.x,
      y: dimensions.y
    };
  }

}
