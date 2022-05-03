import "./collectables.scss";

export class CollectableHandler {

  collect(sheepPosition: { top: number; left: number },
          sheepDimensions: { width: number, height: number }) {
    const collectables = [
      ...document.elementsFromPoint(sheepPosition.left, sheepPosition.top),
      ...document.elementsFromPoint(sheepPosition.left + sheepDimensions.width, sheepPosition.top),
      ...document.elementsFromPoint(sheepPosition.left, sheepPosition.top + sheepDimensions.height),
      ...document.elementsFromPoint(sheepPosition.left + sheepDimensions.width, sheepPosition.top + sheepDimensions.height)
    ];
    collectables.forEach((collectable) => {
      if(collectable.classList.contains("collectable")) {
        collectable.remove();
      }
    });

  }

}
