https://coursework.vschool.io/colossal-adventure-console-rpg/

var sceneCounter = 0;

Main Function (sceneNumber) {

  Save Player's Name

  Introduce the Game

  ? Instructions

  let Scene[i].scene = currentScene

  print(currentScene.description)

  for (option in options) {
    print(option)
  }

  var letter = whatever they picked (w, a, s, d)

  var number = Math.rand() * 2

  Consequesnces = (scene, number, letter) => {
    if (number == 0) 
      HP--
    if (number == 1)
      i++
  }

Scenes 
{
  Scene: {
    name: "scene name"
    sceneDescription: "description"
    monster: "monster name"
    entrance: {
      options: [
        walk: "description" ["win text", "lose text"]
        attack: "description" ["win text", "lose text"]
        sit: "description" ["win text", "lose text"]
        done: "descriptions" ["win text", "lose text"]
      ]
    }
    fight: {
      options: [
        run away: "description"
        attack: "description"
        sleep: "description"
        done: "trigger exit
      ]
    }
    leave: {
      run away: "description"
      attack: "description"
      sleep: "description"
      done: "trigger exit
    }
  }
}