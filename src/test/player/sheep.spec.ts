import {expect} from "chai";
import {describe, it} from "mocha";
import {InputHandler} from "../../main/input/input-handler";
import {KeyCode} from "../../main/input/key-code";
import {Sheep} from "../../main/player/sheep";

describe("Sheep", () => {

  let inputHandler: InputHandler;
  let sheep: Sheep;

  beforeEach(() => {
    inputHandler = {
      getKeyDown(): boolean {
        return false;
      }
    };

    sheep = new Sheep(inputHandler);
  });

  it("increases position.left by VELOCITY, when key RIGHT is down", () => {
    mockGetKeyDownResult(inputHandler, KeyCode.RIGHT);
    const position = getUpdatedPosition(sheep);

    expect(position).to.deep.eq({top: 0, left: Sheep.VELOCITY});
  });

  it("decreases position.left by VELOCITY, when key LEFT is down", () => {
    mockGetKeyDownResult(inputHandler, KeyCode.LEFT);
    const position = getUpdatedPosition(sheep);

    expect(position).to.deep.eq({top: 0, left: -Sheep.VELOCITY});
  });

  it("increases position.top by VELOCITY, when key DOWN is down", () => {
    mockGetKeyDownResult(inputHandler, KeyCode.DOWN);
    const position = getUpdatedPosition(sheep);

    expect(position).to.deep.eq({top: Sheep.VELOCITY, left: 0});
  });

  it("decreases position.top by VELOCITY, when key UP is down", () => {
    mockGetKeyDownResult(inputHandler, KeyCode.UP);
    const position = getUpdatedPosition(sheep);

    expect(position).to.deep.eq({top: -Sheep.VELOCITY, left: 0});
  });

});

function mockGetKeyDownResult(inputHandler: InputHandler, keyCode: KeyCode) {
  inputHandler.getKeyDown = (key: KeyCode) => {
    return key === keyCode;
  };
}

function getUpdatedPosition(sheep: Sheep) {
  sheep.update();
  return sheep.getPosition();
}
