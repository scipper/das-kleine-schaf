import "./blockings.scss";

export class CollisionDetector {

  isMovementBlocked(sheepPosition: { top: number; left: number },
                    sheepDimensions: { width: number, height: number }) {
    let collision = false;
    const blockings = [
      document.elementFromPoint(sheepPosition.left, sheepPosition.top),
      document.elementFromPoint(sheepPosition.left + sheepDimensions.width, sheepPosition.top),
      document.elementFromPoint(sheepPosition.left, sheepPosition.top + sheepDimensions.height),
      document.elementFromPoint(sheepPosition.left + sheepDimensions.width, sheepPosition.top + sheepDimensions.height)
    ];
    for(const blocking of blockings) {
      if(blocking && blocking.classList.contains("blocking")) {
        collision = true;

        break;
      }
    }

    return collision;
  }

}
