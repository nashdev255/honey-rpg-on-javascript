import BattleField from "./BattleField.js";
import Character from "./Characters/Character.js";
import Fighter from "./Characters/Fighters/Fighter.js";
import Monster from "./Characters/Monsters/Monster.js";

const main = () => {
  const fighter = new Fighter('Lumine', 1000, 100, 100, 100);
  const monster = new Monster('monster', 1000, 100, 100, 100);
  
  const battleField = new BattleField(fighter, monster);
}

main();
