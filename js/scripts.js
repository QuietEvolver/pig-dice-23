// this function holds players in the GameBoard (game itself)
function GameBoard() {
  this.players = {};
  this.roundScore = 0;
}

// this function declares the players in the game
function Player(player1, player2) { 
  this.player1 = player1; 
  this.player2 = player2;
}
// players need an id (similar to addBk.)

// this function starts a round score

// to experiment with -- start here in the morning
let diceRoll = function() {
  let currentScore = 0;
  let min = Math.ceil(1); //declare min here
  let max = Math.floor(7); //declare max here; max must be 7 because max < Math.floor()
  let roll =  Math.floor(Math.random() * (max - min) + min);
  currentScore += roll;
  return roll; 
}
// let gameBoard = new GameBoard
// diceRoll(gameBoard);
// seems to be working

// // this is what works -- this is our original
// GameBoard.prototype.score = function() {
//   let currentScore = 0;
//   let min = Math.ceil(1); //declare min here
//   let max = Math.floor(7); //declare max here; max must be 7 because max < Math.floor()
//   let roll =  Math.floor(Math.random() * (max - min) + min);
//   currentScore += roll;
//   return roll; 
// }

GameBoard.prototype.playerTurn = function() {
  // player if/else turns
  // try adding diceRoll in here
  let updatedScore = diceRoll();
  console.log(updatedScore)
  if (this.updatedScore === 1) {
    updatedScore = 0;
  } else if (this.updatedScore !== 1) {
    updatedScore += diceRoll();
    console.log(diceRoll);
  } 

  return updatedScore;
  // let something = the value we pull in for diceRoll();
  // if that something === 1 then score will be 0
  // if that something !== 1 then roll again and add that to something


}


  // running score = current roll
  // current score = totalRoundScore
  // tally = totalGameScore
  // needs to talk to function getRandomInt, will collect value for each roll, and add them for the totalRoundScore, then add that for the totalGameScore

// GameBoard.protoype.currentTurn()
//players.player[id] = this.turn; //pseudocode

//Die roll function
function getRandomInt(min, max) {
  min = Math.ceil(1); //declare min here
  max = Math.floor(7); //declare max here
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt()); //call it without number inside parens b/c already defined

//getting a round score: start originally with 0, add in getRandomInt until player rolls a 1 or holds.