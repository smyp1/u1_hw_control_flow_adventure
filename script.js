function letsPlay() {
  let playerC = prompt("Do you want to enter the dungeon sir? Yes or No?");
  {
    if (playerC === "Yes") {
      alert("That's the spirit let's get us some treasure");
      let playerChoice = prompt(
        "Which direction do you want to go? Foward, Left, or Right."
      );
      if (playerChoice === "Left") {
        alert(
          "You see a long corridor as you walk down it you come to a room with a two bars and the wall has a slot which allows for one of the bars."
        );
        let playerChoiceTwo = prompt(
          " you see Two bars inside the room. One of them is Red and one is Blue. Which one do you want to try?"
        );
        if (playerChoiceTwo === "Red") {
          alert(
            "The floor opens up and you fall into a spike trap. You have died! Game Over!"
          );
          letsPlay();
        } else if (playerChoiceTwo === "Blue") {
          alert(
            "The wall opens up and you look into the opening and you see a door."
          );
          let playerChoiceThree = prompt(
            "You open the door to find the treasure room. How many gold coins do you want to take?"
          );
          let n = 0;
          switch (n) {
            case 0:
              alert("Why would you not take any gold sir it's gold!!!");
            case 1:
              alert("Thats not a lot of gold but gold is gold.");
              break;
            case 2:
              alert("Thats not a lot of gold but gold is gold.");
              break;
            case 3:
              alert("Thats not a lot of gold but gold is gold.");
              break;
            case 4:
              alert("Thats not a lot of gold but gold is gold.");
              break;
            case 5:
              alert("Thats not a lot of gold but gold is gold.");
              break;
            case 6:
              alert(
                "Now we are talking lets go party time at the tavern when we get back!"
              );
              break;
            case 7:
              alert(
                "Now we are talking lets go party time at the tavern when we get back!"
              );
              break;
            case 8:
              alert(
                "Now we are talking lets go party time at the tavern when we get back!"
              );
              break;
            case 9:
              alert(
                "Now we are talking lets go party time at the tavern when we get back!"
              );
              break;
            case 10:
              alert(
                "Now we are talking lets go party time at the tavern when we get back!"
              );
              break;
            default:
              alert("Lets just stare at the gold I guess?");
          }
        } else if (playerChoiceTwo != "Red" && playerChoiceTwo != "Blue") {
          alert(
            "You hear sounds coming from the way you came as you go to check the path a gout of flame blasts you in the face you have died."
          );
        }
      } else if (playerChoice === "Right") {
        alert(
          "The hallway seems to go downhill for a while as you reach the end you see a four way room."
        );
        let playerCh = prompt(
          "Sir which way should we go Foward, Left, or Right"
        );
        if (playerCh === "Left") {
          alert(
            "Um sir I think we found the dragon. As you stare down the sleeping dragon what do you do leave or fight?"
          );
          let playerCho = prompt("Leave or Fight?");
          if (playerCho === "Leave") {
            alert(
              "You have escaped the perilous dungeon unscathed to try again another day"
            );
            letsPlay();
          } else if (playerCho === "Fight") {
            alert(
              "You and your party charge the dragon forgeting the fact it is a dragon and it wakes up and eats you all."
            );
            letsPlay();
          } else if (playerCho != "Leave" && playerCho != "Fight") {
            alert(
              "As you ponder on what to do as it is a dragon and its big and scary. It wakes up and you stare at each other in panic and run as the dragon roars and chases you all down and eats you."
            );
            letsPlay();
          }
        }
      } else if (playerChoice === "Foward") {
        alert(
          "As you continue walking you end up by a dead end with two doors you hear sounds coming from a room off on the Left side or you can go through the Right side door."
        );
        let panic = prompt(
          "What do you want to do sir? Go through the Right or Left side door sir?"
        );
        if ((panic = "Right")) {
          alert("You find you and your party have ended up in a puzzle room");
          {
            let puzzle = prompt(
              "You see on the wall there is a riddle that was crudely carved into the wall along with pictograms of various creatures such as what appears to be the dragon as well as an Orc, a Troll, a Kobold, a Sphinx, and a Goblin 'What is big and mean and something we hate cause it make us think for' the rest was cut off. well sir should we try pressing one in"
            );
            if (puzzle === "Troll") {
              alert(
                "The door opens up to the tresure room. How much gold do you want to take?"
              );
              let n = 0;
              switch (n) {
                case 0:
                  alert("Why would you not take any gold sir it's gold!!!");
                case 1:
                  alert("Thats not a lot of gold but gold is gold.");
                  break;
                case 2:
                  alert("Thats not a lot of gold but gold is gold.");
                  break;
                case 3:
                  alert("Thats not a lot of gold but gold is gold.");
                  break;
                case 4:
                  alert("Thats not a lot of gold but gold is gold.");
                  break;
                case 5:
                  alert("Thats not a lot of gold but gold is gold.");
                  break;
                case 6:
                  alert(
                    "Now we are talking lets go party time at the tavern when we get back!"
                  );
                  break;
                case 7:
                  alert(
                    "Now we are talking lets go party time at the tavern when we get back!"
                  );
                  break;
                case 8:
                  alert(
                    "Now we are talking lets go party time at the tavern when we get back!"
                  );
                  break;
                case 9:
                  alert(
                    "Now we are talking lets go party time at the tavern when we get back!"
                  );
                  break;
                case 10:
                  alert(
                    "Now we are talking lets go party time at the tavern when we get back!"
                  );
                  break;
                default:
                  alert("Lets just stare at the gold I guess?");
              }
            } else if (puzzle != "Troll") {
              alert(
                "You hear a loud creaking noice and look down to see the floor is wet as you look up the wall cracks and lets in a torrent of water you have died."
              );
              letsPlay();
            }
          }
        } else if (panic === "Left") {
          alert(
            "You enter a room full of Goblins, Orcs and Trolls. They seem to be partying and do not notice you right away."
          );
          {
            let fight = prompt("What do you want to do? Leave or Fight?");
            if (fight === "Leave") {
              alert("You safely leave the dungeon to live another day!");
              letsPlay();
            } else if (fight != "Leave") {
              alert(
                "Before you do anything the Monsters realize you are there and panic running into things and breaking stuff and while you stand there confused the room empties and you just take the loot and leave not knowing how you will wxplain this at the tavern tongiht."
              );
              letsPlay();
            }
          }
        } else if (panic != "Left" && panic != "Right") {
          alert(
            "The Left door opens and you see there are a bunch of monsters you look at each other for a second before they roar and charge you. with overwhelming numbers they defeat you. you have died game over!"
          );
          letsPlay();
        }
      }
    } else {
      alert("Sir we can't just stay here day lights wasting away");
      letsPlay();
    }
  }
  if (playerC === "No") {
    alert("What are you sir a scardy cat");
    letsPlay();
  } else if (playerC != "Yes" && playerC != "No") {
    alert("I don't understand you sir");
    letsPlay();
  }
}
document.querySelector("button").addEventListener("click", letsPlay());
