import { Character } from "./Character";

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this._attack = 10;
    this.defence = 40;
    this.stoned = false;
  }
}