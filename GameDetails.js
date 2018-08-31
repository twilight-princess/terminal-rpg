const rs = require('readline-sync')
const Scene = require('./Scenes.json')

let i = 0
let j = 0
let currentScene = Scene[i].scene[j]
let success = true

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
      rs.keyInPause('\nFor each situation you will be given 4 choices.\n \n\'w\' will usually give you some type of movement option like \'walk\' or \'run\'. \n\'a\' will usually give you some kind of \'attack\' or other more phsyical option. \n\'s\' will usually allow you to \'sit\' or \'search\'. \n\'d\' will always give you the option to wimp out aka exit the game. \n\nPress space bar to begin...\n', {guide: false})
      :
      rs.keyInPause('\nThen let\'s Begin!\n\nPress space bar to begin...\n', {guide: false})
  },

  handleChoice: () => {
    for (option in currentScene.options) {
      console.log([letter])
    }
    
    console.log(chances)
    if (instruction.indexOf(choice) === "w") {

    } else {
      console.log('\nPlease choose a valid option.\n')
    }
  },

  gameLoop: () => {
    console.log(currentScene.description)
    // const choice = rs.question('\nWhat would you like to do?\n')
    for (option in currentScene.options) {
      console.log(JSON.stringify(currentScene.options[option].letter))
    }
    console.log()
    rs.promptCL(choice => {
      if (choice === "w") {
        console.log(currentScene.options[0].description)
      // } else if (choice === "a") {
        
      // } else if (choice === "s") {
        
      // } else if (choice === "d") {
        
      }
    })
  }
}


  //storyIntro = () => {
	  //console.log('\nHello, adventurer! This is a quest to save the universe from the evil Emporer Zerg! You\'re not Buzz Lightyear, but you know a guy who knows a guy who met him once. Anyway, Zerg sent his minions to your city to find you. Try to escape them without dying! MUAHAHAHA! By the way, I only know this because I work for Zerg! BUAHAMAMAUAUAUAUAUAUA! Good Luck!\n')
	  //rs.keyInPause()
	  //gameLoop()
  //}