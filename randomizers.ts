// This module holds the randomizers.


/**
 * Takes in an array, and returns a value from a random index.
 * @param array 
 */
export function randomizer(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}


/**
 * Takes in an integer for die size, and returns a random result for that die.
 * @param diesize
 */

export function dieRoll(diesize: number): number {
  var die: number[] = [...Array(diesize).keys()];
  var result: number = (randomizer(die) + 1);
  return result;
}



/**
 * Takes in an array and a value, and returns a new array of distinct random values 
 * from the original array. This new array has a length equal to the value.
 * @param originalArray 
 * @param num 
 */
export function randomizerCount(originalArray: any[], num: number): any[] {
  if (num > originalArray.length) {
    console.log('Error, results requested is as long as or longer than array')
  }
  let resultBasket: any[] = [];
  var itemBasket: any[] = [];
  var catalogue: number[] = [...Array(originalArray.length).keys()];
  let i: number;
  for (i = 0; i < num; i++) {
    const randomItemIndex: number = randomizer(catalogue);
    itemBasket.push(catalogue[randomItemIndex]);
    catalogue.filter(i => i != randomItemIndex);
  }
  itemBasket.forEach(indexPoint => {
    resultBasket.push(originalArray[indexPoint])
  });
  return resultBasket;
}


// Uses randomizer to randomly return true or false.
export function flipCoin() {
  var coin = [0, 1];
  var flip = randomizer(coin);
  if (flip === 1) {
    return true;
  } else {
    return false;
  }
}


