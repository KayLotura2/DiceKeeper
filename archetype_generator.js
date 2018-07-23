"use strict";
// The goal of this module is to create an achetype for a character to fall
// into, based on existing npc blocks.

// Retruns a base Archetype
// TODO add silly thing for secret monster as archetype
function generateBaseArchetype() {
  var weightRoll = dieRoll(100);
  if (weightRoll <= 50) {
    return "commoner (" + randomizer(commonerArchetypes) + ")";
  } else if (weightRoll <= 75) {
    return "guard (" + randomizer(guardArchetypes) + ")";
  } else if (weightRoll <= 95) {
    return randomizer(otherArchetypes);
  } else {
    return randomizer(exceptionalArchetypes);
  }
}

// Returns Archetype & Traits
// Currently only takes in commoner traits
function generateArchetype() {
  return generateBaseArchetype() + " Trait: " + randomizer(archetypes.commoner.traits) + " Ideal: " + randomizer(archetypes.commoner.ideals) + " Flaw: " + randomizer(archetypes.commoner.flaws)
}
