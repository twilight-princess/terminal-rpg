const Scenes = require('./Scenes.json')
const Game = require('./GameDetails')

main = sceneNumber => {

  // Save Player's Name
  // Game.getPlayerName();

  // // Introduce the game and give instructions
  // Game.instructions();

  // loops through each scene of the game
  Game.gameLoop();

  // Game.handleChoice();

}

main();
