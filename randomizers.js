"use strict";

// This module holds the randomizers.

// Takes in an array, and returns a value from a random index.
function randomizer(array){
  return  array[Math.floor(Math.random()* array.length)];
}

// Uses randomizer to randomly return true or false.
function flipCoin() {
  var coin = [0,1];
  var flip = randomizer(coin);
  if (flip === 1) {
    return true;
  } else {
    return false;
  }
}

// takes in an integer for die size, and returns a random result for that die.
function dieRoll (diesize) {
  var die = [...Array(diesize).keys()];
  var result = (randomizer(die) + 1);
  return result;
}
