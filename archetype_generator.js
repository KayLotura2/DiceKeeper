"use strict";
// The goal of this module is to create an achetype for a character to fall
// into, based on existing npc blocks.


// Expand!
var commonerArchetypes = [
  'farmer', 'miner', 'beggar', 'cobbler',
];

// Expand!
var guardArchetypes = [
  'footman', 'crossbower', 'lookout', 'captain',
];


var otherArchetypes = [
'acolyte', 'apprentice wizard', 'archer', 'assassin', 'bandit',
'bandit captain', 'berserker', 'cult fanatic', 'cultist', 'druid', 'gladiator',
'knight', 'mage', 'martial arts adept', 'noble', 'pirate/smuggler', 'priest',
'scout', 'spy', 'swashbuckler', 'thug', 'veteran',
];
// TODO be sure to marry these to a relevant link or source (or both!)

var exceptionalArchetypes = [
'arch druid', 'arch mage', 'bard', 'blackguard', 'champion',
'cult high priest [kraken priest]', 'master thief', 'war priest',
'warlock of the fiend', 'warlord',
];
// TODO be sure to marry these to a relevant link or source (or both!)


// Expand!
var secretMonsters = [
  'dragon', 'illithid', 'lich', 'ogre mage'
];


// Retruns a weighted archetype
// TODO add silly thing for monster archetype to be
function generateArchetype() {
  var weightRoll = dieRoll(100)
  if (weightRoll <= 50) {
    return "commoner (" + randomizer(commonerArchetypes) + ")"
  } else if (weightRoll <= 75) {
    return "guard (" + randomizer(guardArchetypes) + ")"
  } else if (weightRoll <= 95) {
    return randomizer(otherArchetypes)
  } else if (weightRoll <= 99) {
    return randomizer(exceptionalArchetypes)
  } else if (weightRoll <= 100) {
    return randomizer(secretMonsters)
  } else {
    return 'ERROR! generate archetype broke?'
  }
};
