import Character from "./Characters/Character.js";

const main = () => {
  const character = new Character('Lumine', 1000, 100, 100, 100);
  character.showStatus();
}

main();
