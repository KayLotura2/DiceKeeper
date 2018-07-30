"use strict";
//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.


// this function just returns a constrcuted ancestry string from random
// ancestryObject and a random subrace from the ancestryObject, with a 10% chance
// of returning a templated ancestry.
function generateAncestry() {
  var newsubTypes= "";
  var ancestryObj =  randomizer(ancestryJSON.ancestries);
  var ancestrySubObj = randomizer(ancestryObj.subs);
  var tenPercent = dieRoll(10);
  if (tenPercent) {
    var newSize = "";
    var newTypes = [""];
    var beast = "";
    var templateObj = randomizer(ancestryJSON.templates);
    if (templateObj.newSize) {
      newSize = templateObj.newSize + " ";
    }
    if (templateObj.newnTypes) {
      newTypes = ", "+ templateObj.newTypes.join(", ") + " ";
    }
    if (templateObj.beasts) {
    beast = randomizer(templateObj.beasts);
  }
    return {
      types: ancestrySubObj.size + " " + newSize + ancestryObj.types.
      join("/") + newTypes + " (" +  ancestryObj.subTypes.
      join(", ") + ", " +  templateObj.newsubTypes.
      join(", ")  +")",
      ancestry:  templateObj.name + " " + ancestryObj.rt};
  } else {
    return {
      types: ancestrySubObj.size + " " + ancestryObj.rt + " (" + ancestryObj.subTypes.join(", ") + ")",
      ancestry: ancestrySubObj.name + " " + ancestryObj.rt
    }
  }
}
