"use strict";
/*eslint-env es6*/
//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.
exports.__esModule = true;
var ancestryJSON = require("./JSON/ancestry.json");
var randomizers_1 = require("./randomizers");
var ancestries = ancestryJSON.ancestries;
var templates = ancestryJSON.templates;
/**
 * Returns a constrcuted ancestry string from random ancestryObject
 * and a random subrace from the ancestryObject, with a 10% chance
 * of returning a templated ancestry.
 */
function generateAncestry() {
    var newsubTypes = "";
    var currentAncestry = randomizers_1.randomizer(ancestries);
    var currentSubObj = randomizers_1.randomizer(currentAncestry.subs);
    var tenPercent = randomizers_1.dieRoll(10);
    if (tenPercent == 10) {
        var newSize = '';
        var newTypes = '';
        var beast = '';
        var templateBasket = randomizers_1.randomizerCount(templates, 2);
        var currentTemplate = templateBasket[0];
        if (currentAncestry.subTypes[0] === currentTemplate.newsubTypes[0]) {
            currentTemplate = templateBasket[1];
            console.log("Using the second template!");
        }
        if (currentTemplate.sizeChange) {
            newSize = "" + currentTemplate.sizeChange;
        }
        if (currentTemplate.typeChange) {
            newTypes = ", " + currentTemplate.typeChange + " ";
        }
        if (currentTemplate.beasts) {
            var beastChoice = randomizers_1.randomizer(currentTemplate.beasts);
            beast = beastChoice + "-";
        }
        return {
            types: currentSubObj.size + " " + newSize + " " + currentAncestry.types.
                join("/") + " " + newTypes + " (" + currentAncestry.subTypes.
                join(", ") + ", " + currentTemplate.newsubTypes.
                join(", ") + ")",
            ancestry: "" + beast + currentTemplate.name + " " + currentAncestry.rt
        };
    }
    else {
        return {
            types: currentSubObj.size + " " + currentAncestry.types.join("/") + " (" + currentAncestry.subTypes.join(", ") + ")",
            ancestry: currentSubObj.name + " " + currentAncestry.rt
        };
    }
}
exports.generateAncestry = generateAncestry;
