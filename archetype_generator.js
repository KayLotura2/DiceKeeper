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

var archetypes = {
  commoner: {
    traits: [
      'I judge people by their actions, not their words.',
      'If someone is in trouble, I’m always ready to lend help.',
      'When I set my mind to something, I follow through no matter what.',
      'I have a strong sense of fair play and always try to find a balance.',
      'I’m confident in my selfand do what I can to share that confidence.',
      'Thinking is for other people. I prefer action.',
      'I misuse long words in an attempt to sound smarter.',
      'I get bored easily. When am I going to get on with my destiny?',
    ],
    ideals: [
      'Respect. People deserve to be treated with dignity and respect.',
      'Fairness. No one should get preferential treatment before the law.',
      'Freedom. Tyrants must not be allowed to oppress the people.',
      'Might. If I become strong, I can take what I want— what I deserve.',
      'Sincerity. There’s no good in pretending to be something I’m not.',
      'Destiny. Nothing and no one can steer me away from my higher calling.',
    ],
    flaws: [
      'I have the enynimity of the local authorities.',
      'I’m convinced of the significance of my destiny',
      'I have a shameful secret',
      'I have a weakness for the vices of the city, especially hard drink.',
      'Secretly, I believe that things would be better if I were in charge.',
      'I have trouble trusting in my allies.',
    ]
  }
};


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
