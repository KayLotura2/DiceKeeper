"use strict";
/*eslint-env es6*/
//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.


// this function just returns a constrcuted ancestry string from random
// ancestryObject and a random subrace from the ancestryObject, with a 10% chance
// of returning a templated ancestry.
function generateAncestry() {
  var newsubTypes= "";
  var ancestryObj =  randomizer(ancestryJSON.ancestries);
  var ancestrySubObj = randomizer(ancestryObj.subs);
  var tenPercent = dieRoll(10);
  if (tenPercent == 10) {
    var newSize;
    var newTypes = [""];
    var beast = "";
    var templateBasket = randomizerCount(ancestryJSON.templates, 2);
    var templateObj = templateBasket[0];
    if (ancestryObj.subTypes[0] == templateObj.newsubTypes[0]) {
      templateObj = templateBasket[1];
      console.log("Using the second template!");
    }
    if (templateObj.newSize) {
      newSize = `${templateObj.newSize}`;
    }
    if (templateObj.typeChange) {
      newTypes = `, ${templateObj.typeChange} `;
    }
    if (templateObj.beasts) {
    var beastChoice = randomizer(templateObj.beasts);
    beast = `${beastChoice}-`;
  }
    return {
      types: `${ancestrySubObj.size} ${newSize} ${ancestryObj.types.
      join("/")} ${newTypes} (${ancestryObj.subTypes.
      join(", ")}, ${templateObj.newsubTypes.
      join(", ")})`,
      ancestry:  `${beast}${templateObj.name} ${ancestryObj.rt}`
    };
  } else {
    return {
      types: `${ancestrySubObj.size} ${ancestryObj.types.join("/")} (${ancestryObj.subTypes.join(", ")})`,
      ancestry: `${ancestrySubObj.name} ${ancestryObj.rt}`
    };
  }
}
