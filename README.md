# Pig Dice (TESTING EXAMPLE)

#### By Aaron Demski, Erin Templin, Vera Weikel, Sarah Andyshak

#### Pig Dice

## Technologies Used

* _Javascript_
* _CSS_
* _HTML_
* _TDD_
* _Whiteboard_

## Description

_A pig dice game where two users can play dice against each other._

## Setup/Installation Requirements

* Copy repo to your desktop.
* Open index.html in your browser.


## TDD Tests
Describe getRandomInt();

Test 1: "It should return a whole positive number between 1 and 6."
Code: getRandomInt();
Expected Output: [randomly generated number between 1 and 6]

<!-- New function -->
Describe GameBoard()

Test 1: "It should hold 2 players in the constructor object."
Code: 
let gameboard = new GameBoard();
gameboard.players.player1 = ("erin");
gameboard.players;
gameboard.players.player2 = ("vera")
gameboard.players;
Expected Output: player1 = ("erin"), player2 = ("vera");

<!-- New function -->
Describe Player()

Test 1: "It should add 2 players to the board constructor object."
Code: let newPlayers = new Player("erin", "timlin");
Expected Output: newPlayers = {player1: erin, player2: timlin}

<!-- New function -->
Describe Gameboard.prototype.score();

Test 1: "It should roll the die and create a score."
Code: let gameboard = new GameBoard();
gameboard.score();
Expected Outcome: random number between 1 and 6. 

<!-- New function -->
Describe Gameboard.prototype.playerTurn();

Test 1: "It should return the score created in Gameboard.prototype.score()."
Code: let gameboard = new GameBoard();
gameboard.playerTurn();
Expected Outcome: random number between 1 and 6. 


## Known Bugs

* _No known issues at this time_

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2023 Aaron Demski, Erin Templin, Mesha Devan, Vera Weikel_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.