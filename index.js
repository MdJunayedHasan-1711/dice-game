// for taking players' name
player1 = prompt("Enter name of Player 1");
player2 = prompt("Enter name of Player 2");

document.querySelectorAll("p")[0].textContent = player1;
document.querySelectorAll("p")[1].textContent = player2;

// adding event listener type = click any where
document.addEventListener("click", diceRoll);

// function to be executed if the given event took place
function diceRoll() {
  // get random number for the first dice
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var dice1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("div img")[0].setAttribute("src", dice1);

  // get random number for the second dice
  var randomNumber2 = Math.ceil(Math.random() * 6);
  var dice2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("div img")[1].setAttribute("src", dice2);

  // heading where result is declared
  var heading = document.querySelector("h1");

  // decision making part
  if (randomNumber1 == randomNumber2) {
    // innerHTMLused because we are adding html tags here
    heading.innerHTML =
      'Draw! <i class="fa-solid fa-flag fa-shake" style="color: #f4f1f1;"></i>';
  } else if (randomNumber1 > randomNumber2) {
    // string concatenation used for assignment to innerHTML
    heading.innerHTML =
      '<i class="fa-solid fa-heart fa-beat" style="color: #f70202"></i> ' +
      player1 +
      " Wins!";
  } else {
    // string concatenation used for assignment to innerHTML
    heading.innerHTML =
      player2 +
      ' Wins! <i class="fa-solid fa-heart fa-beat" style="color: #f70202"></i>';
  }
}
