import "./blockings.scss";

export class CollisionDetector {

  constructor(private sceneOffset: { x: number, y: number }) {
  }

  isAllowedToMovement(sheepPosition: { top: number; left: number },
                      sheepDimensions: { width: number, height: number },
                      movement: { top: number; left: number }) {
    let allowed = true;
    const blockingElements = [
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left + movement.left, this.sceneOffset.y + sheepPosition.top + movement.top),
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left + movement.left + sheepDimensions.width, this.sceneOffset.y + sheepPosition.top + movement.top),
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left + movement.left, this.sceneOffset.y + sheepPosition.top + movement.top + sheepDimensions.height),
      document.elementFromPoint(this.sceneOffset.x + sheepPosition.left + movement.left + sheepDimensions.width, this.sceneOffset.y + sheepPosition.top + movement.top + sheepDimensions.height)
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
