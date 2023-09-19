import Character from "../Character.js";

class Monster extends Character {
  constructor(name, maxhp, atk, def, spd) {
    super(name, maxhp, atk, def, spd);
  }
}

export default Monster;
