
//randomizes treasure
var treasure = Math.floor(Math.random() * 9)
//logs win in console
console.log(treasure);
//randomizes bomb
var bomb = Math.floor(Math.random() * 9)
console.log(bomb);
//declares function that takes in number as argument
const success = (number) => {
//checks if clicked position is same as treasure
  if (number === treasure) { alert("Winner!")
//finding element with id that matches the number
    document.getElementById(number).innerHTML = "🦴"
 }
//checks if clicked position is same as bomb
  else if (number=== bomb){ alert("Loser 💩")
    document.getElementById(number).innerHTML = "💩"
  }
  else {
    document.getElementById(number).innerHTML = "🚽"
  }
}
