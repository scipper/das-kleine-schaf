import {KeyCode} from "./key-code";

export interface InputHandler {
  getKeyDown(key: KeyCode): boolean;
}
