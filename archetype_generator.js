"use strict";
// The goal of this module is to create an achetype for a character to fall
// into, based on existing npc blocks.

// Retruns a base Archetype
// TODO add silly thing for secret monster as archetype
function generateBaseArchetype() {
  var weightRoll = dieRoll(100);
  if (weightRoll <= 50) {
    return "commoner (" + randomizer(archetypeJSON.commonerArchetypes) + ")";
  } else if (weightRoll <= 75) {
    return "guard (" + randomizer(archetypeJSON.guardArchetypes) + ")";
  } else if (weightRoll <= 95) {
    return randomizer(archetypeJSON.basicArchetypes);
  } else {
    return randomizer(archetypeJSON.exceptionalArchetypes);
  }
}

// Returns Stat Block
// Currently only returns a commoner's stat block
function generateBlock() {
  var block = {}
  block.baseArchetype = generateBaseArchetype();
  block.ideal = randomizer(archetypeJSON.archetypeIdeals);
  block.trait = randomizer(archetypeJSON.archetypeTraits);
  block.flaw = randomizer(archetypeJSON.archetypeFlaws);
  block.stats = npcBlockJSON.commoner;
  return block;
  }
