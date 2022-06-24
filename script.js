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
          "The floor opens up and you fall into a spike trap. You have died!"
        );
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
        } else if (playerCho === "Fight") {
          alert(
            "You and your party charge the dragon forgeting the fact it is a dragon and it wakes up and eats you all."
          );
        } else if (playerCho != "Leave" && playerCho != "Fight") {
          alert(
            "As you ponder on what to do as it is a dragon and its big and scary. It wakes up and you stare at each other in panic and run as the dragon roars and chases you all down and eats you."
          );
        }
      }
    } else if (playerChoice === "Foward") {
      alert(
        "As you continue walking you end up by a dead end with two doors you hear sounds coming from a room off to the side you see a door across from the door where the sound is coming or you can continue down the hallway."
      );
      let panic = prompt("What do you want to do sir");
    } else {
      alert("Sir we can't just stay here day lights wasting away");
    }
  } else if (playerC === "No") {
    alert("What are you sir a scardy cat");
  } else if (playerC != "Yes" && playerC != "No")
    alert("I don't understand you sir");
}
