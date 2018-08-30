const rs = require('readline-sync')
const Scene = require('./Scenes.json')

let i = 0
let j = 0
let currentScene = Scene[i].scene[j]
let success = true

console.log(currentScene)
const instruction = ["w", "a", "s", "d"]

class Player {
  constructor(name, HP=3, backpack = ["water bottle", "knife"]) {
    this.name = name
    this.HP = HP
    this.backpack = backpack
  }
}

let adventurer = {}

module.exports =  {
  getPlayerName: () => {
    let correct = false
    let name;
    while (!correct) {
	    name = rs.question('\nTo begin, please enter your name: ')
	    correct = rs.keyInYN('\nYou entered \"' + name + '\". Is this correct? ')
  	  if (!correct) {
	  	  console.log('\nSorry. Let\'s try again.')
	    }
    }
	  adventurer = new Player(name)
  },

  instructions: () => {
	  const instruct = rs.keyInYN('\nWould you like a list of instructions?\n')
	  instruct ?
		  console.log('\nFor each situation you will be given 4 choices. They are \'w\', \'a\', \'s\', and \'d\'. The details will be given to you for the specific situation. \n\'w\' will usually give you some type of movement option like \'walk\' or \'run\'. \n\'a\' will usually give you some kind of \'attack\' or other more phsyical option. \n\'s\' will usually allow you to \'sit\' or \'search\'. \n\'d\' will always give you the option to wimp out aka exit the game. \n')
		  :
      console.log('\nThen let\'s Begin!')
  },

  handleChoice: () => {
    const choice = rs.question('\nWhat would you like to do?\n')
    const chances = Math.floor(Math.random() * currentScene.options[choice].length-1)
    console.log(chances)
    if (instruction.indexOf(choice) === "w") {
      

      console.log('\nPlease choose a valid option.\n')
    }
  },

  //storyIntro = () => {
	  //console.log('\nHello, adventurer! This is a quest to save the universe from the evil Emporer Zerg! You\'re not Buzz Lightyear, but you know a guy who knows a guy who met him once. Anyway, Zerg sent his minions to your city to find you. Try to escape them without dying! MUAHAHAHA! By the way, I only know this because I work for Zerg! BUAHAMAMAUAUAUAUAUAUA! Good Luck!\n')
	  //rs.keyInPause()
	  //gameLoop()
  //}

  gameLoop: () => {
    console.log(currentScene.description)
  }
}

