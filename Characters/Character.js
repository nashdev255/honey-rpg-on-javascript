class Character {
  constructor(name, maxhp, atk, def, spd) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = this.maxhp;
    this.atk = atk;
    this.def = def;
    this.spd = spd;
  }

  showStatus() {
    console.log('<Status>');
    console.log(`NAME : ${this.name}`);
    console.log(`HP:: ${this.hp}/${this.maxhp}`);
    console.log(`ATK : ${this.atk}`);
    console.log(`DEF : ${this.def}`);
    console.log(`SPD : ${this.spd}`);
  }
}

export default Character;
