import "./collectables.scss";

export class ItemCollector {

  constructor(private sceneOffset: { x: number, y: number }) {
  }

  collect(sheepPosition: { top: number; left: number },
          sheepDimensions: { width: number, height: number }) {
    const collectables = [
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left, this.sceneOffset.y + sheepPosition.top),
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left + sheepDimensions.width, this.sceneOffset.y + sheepPosition.top),
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left, this.sceneOffset.y + sheepPosition.top + sheepDimensions.height),
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left + sheepDimensions.width, this.sceneOffset.y + sheepPosition.top + sheepDimensions.height)
    ];
    collectables.forEach((collectable) => {
      if(collectable && collectable.classList.contains("collectable")) {
        collectable.remove();
      }
    });

  }

}
