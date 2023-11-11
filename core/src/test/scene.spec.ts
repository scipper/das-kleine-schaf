import {assert} from "chai";
import {beforeEach, describe, it} from "mocha";

class Scene {

  private display: Display;
  private width: number;
  private height: number;
  private blockingItems: { [x: string]: { [y: string]: string } };

  constructor(renderer: Display, width: number, height: number) {
    this.display = renderer;
    this.width = width;
    this.height = height;
    this.blockingItems = {};
  }

  renderScene() {
    for(let height = 0; height < this.height; height++) {
      this.display.addRow();
      for(let width = 0; width < this.width; width++) {
        if(this.blockingItems[width] && this.blockingItems[width][height]) {
          this.display.addColumnWithItem(this.blockingItems[width][height]);
        } else {
          this.display.addColumn();
        }
      }
    }
  }

  addBlockingItem(x: number, y: number) {
    this.blockingItems[x - 1] = {};
    this.blockingItems[x - 1][y - 1] = "B";
  }
}

class Display {

  renderedScene: string;

  constructor() {
    this.renderedScene = "";
  }

  addRow() {
    if(this.renderedScene !== "") {
      this.renderedScene += "\n";
    }
  }

  addColumn() {
    this.renderedScene += ".";
  }

  addColumnWithItem(item: string) {
    this.renderedScene += item;
  }
}

describe("Scene", () => {

  beforeEach(() => {
  });

  it("should render a scene with sizes", () => {
    let renderer = new Display();
    let scene = new Scene(renderer, 4, 3);

    scene.renderScene();

    assert.equal(renderer.renderedScene, `....\n....\n....`);
  });

  it("should render a blocking item in the scene", () => {
    let renderer = new Display();
    let scene = new Scene(renderer, 4, 3);

    scene.addBlockingItem(2, 2);
    scene.renderScene();

    assert.equal(renderer.renderedScene, `....\n.B..\n....`);
  });

});
