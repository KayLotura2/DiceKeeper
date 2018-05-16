// This module holds the randomizers.

// Takes in an array, and returns a value from a random index.
function randomizer(array){
  return  array[Math.floor(Math.random()* array.length)];
}

// Uses randomizer to randomly return true or false.
function flipcoin() {
  var coin = [0,1];
  var flip = _randomizer(coin);
  if (flip === 1) {
    return true;
  } else {
    return false;
  }
}

export {randomizer, flipcoin};
