// this function holds players in the GameBoard (game itself)
function GameBoard() {
  this.players = {};
  this.roundScore = 0;
}

// this function declares the players in the game
function Player(player1, player2) { 
  this.player1 = player1; 
  this.player2 = player2;
  this.player1Score = this.player1Score;
  this.player2Score = this.player2Score;
}

let diceRoll = function() {
  let currentScore = 0;
  let min = Math.ceil(1); //declare min here
  let max = Math.floor(7); //declare max here; max must be 7 because max < Math.floor()
  let roll =  Math.floor(Math.random() * (max - min) + min);
  currentScore += roll;
  return roll; 
}
let gameBoard = new GameBoard; // fake db

// dxn: change the return; event handler for click; if/else: 

GameBoard.prototype.playerTurn = function() {
  let updatedScore = diceRoll();
  let currentTurnScore = updatedScore;
  let currentTallyScore = 0;
  // currentTallyScore += currentTurnScore;
  console.log("updatedScore, currentTurnScore, currentTallyScore, this.roundScore: ", updatedScore, currentTurnScore, currentTallyScore, this.roundScore);
  
  if (this.currentTurnScore === 1) {
    // this.roundScore = 0;
    console.log("if rs, currentTallyScore:  ", this.roundScore, currentTallyScore);
    // return this.roundScore;
    // currentTallyScore = 0;
    return currentTallyScore;
  } 
  else if (this.currentTurnScore !== 1) {
    // this.roundScore += currentTurnScore; // current turn tally until a 1 is rolled;
    currentTallyScore += currentTurnScore;
    console.log("else t.rs: , currentTallyScore: ", this.roundScore, currentTallyScore);
    // return this.roundScore;
  } 
  else { // hold(event) 
    this.roundScore += currentTallyScore;
    return this.roundScore;
  }
  return this.roundScore;
}


  // running score = current roll
  // current score = totalRoundScore
  // tally = totalGameScore
  // needs to talk to function getRandomInt, will collect value for each roll, and add them for the totalRoundScore, then add that for the totalGameScore

// GameBoard.protoype.currentTurn()
//players.player[id] = this.turn; //pseudocode

// //Die roll function
// function getRandomInt(min, max) {
//   min = Math.ceil(1); //declare min here
//   max = Math.floor(7); //declare max here
//   return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(getRandomInt()); //call it without number inside parens b/c already defined

//getting a round score: start originally with 0, add in getRandomInt until player rolls a 1 or holds.