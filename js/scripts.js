function GameBoard(player1, player2){
  this.players1 = player1; // takes 2+ players
  this.players2 = player1;
}
// players need an id (similar to addBk.)

// score
GameBoard.prototype.score(){
  // running score = current roll
  // current score = totalRoundScore
  // tally = totalGameScore
}
// GameBoard.protoype.currentTurn()
//players.player[id] = this.turn; //pseudocode

//Die roll function
function getRandomInt(min, max) {
  min = Math.ceil(1); //declare min here
  max = Math.floor(7); //declare max here
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt()); //call it without number inside parens b/c already defined