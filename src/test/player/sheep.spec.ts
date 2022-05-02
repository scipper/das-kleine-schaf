import {expect} from "chai";
import {describe, it} from "mocha";
import {Sheep} from "../../main/player/sheep";

describe("Sheep", () => {

  let sheep: Sheep;

  beforeEach(() => {
    sheep = new Sheep();
  });

  it("increases position.left by VELOCITY, when key RIGHT is down", () => {
    sheep.moveRight();

    const position = sheep.getPosition();

    expect(position).to.deep.eq({top: 0, left: Sheep.VELOCITY});
  });

  it("decreases position.left by VELOCITY, when key LEFT is down", () => {
    sheep.moveLeft();

    const position = sheep.getPosition();

    expect(position).to.deep.eq({top: 0, left: -Sheep.VELOCITY});
  });

  it("increases position.top by VELOCITY, when key DOWN is down", () => {
    sheep.moveDown();

    const position = sheep.getPosition();

    expect(position).to.deep.eq({top: Sheep.VELOCITY, left: 0});
  });

  it("decreases position.top by VELOCITY, when key UP is down", () => {
    sheep.moveUp();

    const position = sheep.getPosition();

    expect(position).to.deep.eq({top: -Sheep.VELOCITY, left: 0});
  });

});
