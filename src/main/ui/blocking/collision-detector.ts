import "./blockings.scss";

export class CollisionDetector {

  isAllowedToMovement(sheepPosition: { top: number; left: number },
                      sheepDimensions: { width: number, height: number },
                      movement: { top: number; left: number }) {
    let allowed = true;
    const blockingElements = [
      document.elementFromPoint(sheepPosition.left + movement.left, sheepPosition.top + movement.top),
      document.elementFromPoint(sheepPosition.left + movement.left + sheepDimensions.width, sheepPosition.top + movement.top),
      document.elementFromPoint(sheepPosition.left + movement.left, sheepPosition.top + movement.top + sheepDimensions.height),
      document.elementFromPoint(sheepPosition.left + movement.left + sheepDimensions.width, sheepPosition.top + movement.top + sheepDimensions.height)
    ];
    for(const blocking of blockingElements) {
      if(blocking && blocking.classList.contains("blocking")) {
        allowed = false;

        break;
      }
    }

    return allowed;
  }

}
