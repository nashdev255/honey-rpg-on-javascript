import readlineSync from 'readline-sync';

class BattleField {
  /* private fields */
  #fighter;
  #monster;

  /* private methods */

  /**
   * Returns a random number 0 or 1.
   */
  #generateRandomTurn = () => {
    return Math.floor(Math.random()*2);
  }

  /* public methods */
  constructor(fighter, monster) {
    this.fighter = fighter;
    this.monster = monster;
    this.init();
    this.cycleTurn();
  }

  /**
   * Initialize BattleField.
   */
  init() {
    this.isFighterTurn = this.#generateRandomTurn;
  }

  /**
   * Set which turn should be started.<br>
   * This will end when either monster or fighter died.
   */
  cycleTurn() {
    if(this.isFighterTurn) {
      this.selectFighterAction();
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

  /**
   * User side interface for selecting Action.
   */
  selectFighterAction() {
    console.log('what do you want to do?');
    console.log('1.attack 2.protect 3.use item 4.escape');

    let userSelected = undefined;
    let isNotSelected = true;
    while(isNotSelected) {
      userSelected = readlineSync.questionInt();
      if(1 <= userSelected && userSelected <= 4) isNotSelected = false;
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
