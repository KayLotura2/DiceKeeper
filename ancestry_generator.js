"use strict";
//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.

// this function just returns a constrcuted ancestry string from random
// ancestryObject and a random subrace from the ancestryObject, with a 10% chance
// of returning a templated ancestry.
function generateAncestry() {
  var ancestryObj =  randomizer(ancestryJSON.ancestries);
  var ancestrySubObj = randomizer(ancestryObj.subs);
  var tenPercent = dieRoll(10);
  if (tenPercent === 10) {
    var templateSubObj = randomizer(ancestryJSON.templates);
    return ancestrySubObj.size + " " + templateSubObj.name + " (" +  ancestrySubObj.name + ") " + ancestryObj.rt + " (" + ancestryObj.desc + ")";
  } else {
    return ancestrySubObj.size + " " + ancestrySubObj.name + " " + ancestryObj.rt  + "(" + ancestryObj.desc + ", " + ancestrySubObj.newSubtyp + ")";
  }
}
