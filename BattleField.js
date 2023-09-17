import readlineSync from 'readline-sync';

class BattleField {
  constructor(fighter, monster) {
    this.fighter = fighter;
    this.monster = monster;
    this.isFighterTurn = Math.floor(Math.random()*2);
    this.init();
  }

  init() {
    this.isFighterTurn = Math.floor(Math.random()*2);
    this.cycleTurn();
  }

  cycleTurn() {
    if(this.isFighterTurn) {
      this.selectFighterAttack();
    } else {
      this.monsterAttack();
    }

    if(!this.fighter.hp) {
      console.log('you lose...');
      return;
    } else if(!this.monster.hp) {
      console.log('you win!!!');
      return;
    }

    this.isFighterTurn = !this.isFighterTurn;
    this.cycleTurn();
  }

  selectFighterAttack() {
    console.log('what do you want to do?');
    console.log('1.attack 2.protect 3.use item 4.escape')
    while(1 <= Math.floor(readlineSync.question('>')) && Math.floor(readlineSync.question('>')) <= 4) {
      const userSelected = readlineSync.question('>');
    }
    switch(userSelected) {
      case 1:
        this.fighter.attack(monster);
        break;
      case 2:
        this.fighter.protect();
        break;
      case 3:
        this.selectItems();
        break;
      case 4:
        this.fighterEscape();
        break;
      default:
        console.error('type error');
        break;
    }
  }
}

export default BattleField;
