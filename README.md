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

Test 1: "It should add 1 player to the board constructor object."
Code: 
let player1 = "Sarah";
GameBoard(player1);
Expected Output: "Sarah"

<!-- New function -->
Describe AllPlaces()

Test 1: "It should build an AllPlaces object housing ind'l Places."
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces;
Expected Output: allPlaces = "{}";

<!-- New function -->
Describe AllPlaces.prototype.addPlace()

Test 1: "It should add specified place object to AllPlaces constructor object"
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let testPlace2 = new Place("Vancouver", "CAN", "winter", "cold, cold temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testPlace);
allPlaces.addPlace(testPlace2);
Expected Output:
allPlaces.places {Montana: Place, Vancouver: Place}

Test 2: "It should add a unique ID to reference the object instance that assignId method is called on"
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testPlace);
allPlaces;
Expected Output:
allPlaces.places {1: Place}

<!-- New function -->
Describe AllPlaces.prototype.assignId()

Test 1: "It should assign a unique id to each place added to the AllPlaces object"
Code: 
let testPlace1 = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces.assignId(testPlace1);
Expected Output:
allPlaces.places {1}

<!-- New function -->
Describe AllPlaces.prototype.deletePlaceById()

Test 1: "It should delete a place by a unique id previously added to the AllPlaces object"
Code: 
let testPlace1 = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let testPlace2 = new Place("Vancouver", "CAN", "winter", "cold, cold temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testplace1);
allPlaces.addPlace(testplace2);
allPlaces.deletePlaceById(1);
Expected Output:
allPlaces.places {2: Place}

<!-- New function -->
Describe AllPlaces.prototype.findPlaceById()

Test 1: "It should find a place by a unique id previously added to the AllPlaces object"
Code: 
let testPlace1 = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let testPlace2 = new Place("Vancouver", "CAN", "winter", "cold, cold temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testplace1);
allPlaces.addPlace(testplace2);
allPlaces.findPlaceById(1);
Expected Output:
allPlaces.places {1: Place}

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