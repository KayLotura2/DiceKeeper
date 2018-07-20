"use strict";
//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.

// this function just returns a constrcuted ancestry string from random
// ancestryObject and a random subrace from the ancestryObject, with a 10% chance
// of returning a templated ancestry.
function generateAncestry() {
  var ancestryObject =  randomizer(ancestryJSON.ancestries);
  var ancestryRoot = ancestryObject.rt;
  var ancestrySub = randomizer(ancestryObject.subs);
  var tenPercent = dieRoll(10);
  if (tenPercent === 10) {
    var templateSub = randomizer(ancestryJSON.templates);
    return templateSub + " (" + ancestrySub + ") " + ancestryRoot;
  } else {
    return ancestrySub + " " + ancestryRoot;
  }
}
