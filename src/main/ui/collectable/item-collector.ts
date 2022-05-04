import "./collectables.scss";

export class ItemCollector {

  collect(sheepPosition: { top: number; left: number },
          sheepDimensions: { width: number, height: number }) {
    const collectables = [
      document.elementFromPoint(sheepPosition.left, sheepPosition.top),
      document.elementFromPoint(sheepPosition.left + sheepDimensions.width, sheepPosition.top),
      document.elementFromPoint(sheepPosition.left, sheepPosition.top + sheepDimensions.height),
      document.elementFromPoint(sheepPosition.left + sheepDimensions.width, sheepPosition.top + sheepDimensions.height)
    ];
    collectables.forEach((collectable) => {
      if(collectable && collectable.classList.contains("collectable")) {
        collectable.remove();
      }
    });

  }

}
