"use strict";
// This module holds the randomizers.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/**
 * Takes in an array, and returns a value from a random index.
 * @param array
 */
function randomizer(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.randomizer = randomizer;
/**
 * Takes in an integer for die size, and returns a random result for that die.
 * @param diesize
 */
function dieRoll(diesize) {
    var die = __spreadArrays(Array(diesize).keys());
    var result = (randomizer(die) + 1);
    return result;
}
exports.dieRoll = dieRoll;
/**
 * Takes in an array and a value, and returns a new array of distinct random values
 * from the original array. This new array has a length equal to the value.
 * @param originalArray
 * @param num
 */
function randomizerCount(originalArray, num) {
    if (num > originalArray.length) {
        console.log('Error, results requested is as long as or longer than array');
    }
    var resultBasket = [];
    var itemBasket = [];
    var catalogue = __spreadArrays(Array(originalArray.length).keys());
    var i;
    var _loop_1 = function () {
        var randomItemIndex = randomizer(catalogue);
        itemBasket.push(catalogue[randomItemIndex]);
        catalogue.filter(function (i) { return i != randomItemIndex; });
    };
    for (i = 0; i < num; i++) {
        _loop_1();
    }
    itemBasket.forEach(function (indexPoint) {
        resultBasket.push(originalArray[indexPoint]);
    });
    return resultBasket;
}
exports.randomizerCount = randomizerCount;
// Uses randomizer to randomly return true or false.
function flipCoin() {
    var coin = [0, 1];
    var flip = randomizer(coin);
    if (flip === 1) {
        return true;
    }
    else {
        return false;
    }
}
exports.flipCoin = flipCoin;
