"use strict";
/*eslint-env es6*/
// The goal of this module is to create an achetype for a character to fall
// into, based on existing npc blocks.
exports.__esModule = true;
var archetypeJSON = require("./JSON/archetype.json");
var npcBlockJSON = require("./JSON/npcBlock.json");
var namesJSON = require("./JSON/names.json");
var randomizers_1 = require("./randomizers");
var names = namesJSON.names;
// TODO: Collapse these under one object
var commonerArchetypes = archetypeJSON.commonerArchetypes;
var guardArchetypes = archetypeJSON.guardArchetypes;
var basicArchetypes = archetypeJSON.basicArchetypes;
var exceptionalArchetypes = archetypeJSON.exceptionalArchetypes;
var secretMonsters = archetypeJSON.secretMonsters;
// TODO: Collapse these under one object
var ideals = archetypeJSON.archetypeIdeals;
var traits = archetypeJSON.archetypeTraits;
var flaws = archetypeJSON.archetypeFlaws;
// TODO: Make more than commoner block
var stats = npcBlockJSON.commoner;
/**
 * Retruns a base Archetype
 */
function generateBaseArchetype() {
    var weightedRoll = randomizers_1.dieRoll(100);
    if (weightedRoll <= 50) {
        return "commoner (" + randomizers_1.randomizer(commonerArchetypes) + ")";
    }
    else if (weightedRoll <= 75) {
        return "guard (" + randomizers_1.randomizer(guardArchetypes) + ")";
    }
    else if (weightedRoll <= 95) {
        return randomizers_1.randomizer(basicArchetypes);
    }
    else if (weightedRoll <= 99) {
        return randomizers_1.randomizer(exceptionalArchetypes);
    }
    else {
        // Secretly a Monster!
        var secretMonster = randomizers_1.randomizer(secretMonsters);
        var secondWeightedRoll = randomizers_1.dieRoll(8);
        if (secondWeightedRoll === 1) {
            return secretMonster + " posing as a commoner (" + randomizers_1.randomizer(commonerArchetypes) + ")";
        }
        else if (secondWeightedRoll === 2) {
            return secretMonster + " posing as a guard (" + randomizers_1.randomizer(guardArchetypes) + ")";
        }
        else if (weightedRoll <= 5) {
            return secretMonster + " posing as a " + randomizers_1.randomizer(basicArchetypes);
        }
        else {
            return secretMonster + " posing as a " + randomizers_1.randomizer(exceptionalArchetypes);
        }
    }
}
/**
 * Returns Stat Block
 * Currently only returns a commoner's stat block
 * TODO: Flesh Out
 */
function generateArchetypeBlock() {
    var block = {
        name: randomizers_1.randomizer(names) + "  " + randomizers_1.randomizer(names),
        baseArchetype: generateBaseArchetype(),
        ideal: randomizers_1.randomizer(ideals),
        trait: randomizers_1.randomizer(traits),
        flaw: randomizers_1.randomizer(flaws),
        // This is only one stat block currently
        stats: stats
    };
    return block;
}
exports.generateArchetypeBlock = generateArchetypeBlock;
