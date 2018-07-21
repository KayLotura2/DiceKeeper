"use strict";

// This module holds the randomizers.

// Takes in an array, and returns a value from a random index.
function randomizer(array){
  return  array[Math.floor(Math.random()* array.length)];
}

// Takes in an array and a value, and returns a new array of distinct random
// values from the original array. This new array has a length equal to the value.
// TODO: Have some logic if num > originalArray.length
function randomizerCount(originalArray, num){
  var resultBasket = [];
  var itemBasket = [];
  var catalogue = [...Array(originalArray.length).keys()];
  var i;
  for (i = 0; i < num; i++) {
    var randomItem = randomizer(catalogue);
    itemBasket.push(catalogue[randomItem]);
    catalogue.filter(i => i != randomItem);
  }
  itemBasket.forEach(indexPoint =>
    resultBasket.push(originalArray[indexPoint]));
    return resultBasket;
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
