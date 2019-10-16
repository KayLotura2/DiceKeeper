/*eslint-env es6*/
// The goal of this module is to create an achetype for a character to fall
// into, based on existing npc blocks.

import * as archetypeJSON from "../JSON/archetype.json"
import * as npcBlockJSON from "../JSON/npcBlock.json"
import * as namesJSON from "../JSON/names.json"
import { randomizer, dieRoll } from "./randomizers";


type ArchetypeBlock = {
  name: string,
  baseArchetype: string,
  ideal: string,
  trait: string,
  flaw: string,
  stats: string[]
}


const names: string[] = (<any>namesJSON).names
// TODO: Collapse these under one object
const commonerArchetypes: string[] = (<any>archetypeJSON).commonerArchetypes
const guardArchetypes: string[] = (<any>archetypeJSON).guardArchetypes
const basicArchetypes: string[] = (<any>archetypeJSON).basicArchetypes
const exceptionalArchetypes: string[] = (<any>archetypeJSON).exceptionalArchetypes
const secretMonsters: string[] = (<any>archetypeJSON).secretMonsters
// TODO: Collapse these under one object
const ideals: string[] = (<any>archetypeJSON).archetypeIdeals
const traits: string[] = (<any>archetypeJSON).archetypeTraits
const flaws: string[] = (<any>archetypeJSON).archetypeFlaws
// TODO: Make more than commoner block
const stats: string[] = (<any>npcBlockJSON).commoner


/**
 * Retruns a base Archetype
 */
function generateBaseArchetype(): string {
  const weightedRoll: number = dieRoll(100);
  if (weightedRoll <= 50) {
    return `commoner (${randomizer(commonerArchetypes)})`
  } else if (weightedRoll <= 75) {
    return `guard (${randomizer(guardArchetypes)})`
  } else if (weightedRoll <= 95) {
    return randomizer(basicArchetypes)
  } else if (weightedRoll <= 99) {
    return randomizer(exceptionalArchetypes)
  } else {
    // Secretly a Monster!
    const secretMonster: string = randomizer(secretMonsters)
    const secondWeightedRoll: number = dieRoll(8);
    if (secondWeightedRoll === 1) {
      return `${secretMonster} posing as a commoner (${randomizer(commonerArchetypes)})`
    } else if (secondWeightedRoll === 2) {
      return `${secretMonster} posing as a guard (${randomizer(guardArchetypes)})`
    } else if (weightedRoll <= 5) {
      return `${secretMonster} posing as a ${randomizer(basicArchetypes)}`
    } else {
      return `${secretMonster} posing as a ${randomizer(exceptionalArchetypes)}`
    }
  }
}

/**
 * Returns Stat Block
 * Currently only returns a commoner's stat block
 * TODO: Flesh Out 
 */
function generateArchetypeBlock() {
  const block: ArchetypeBlock = {
    name: `${randomizer(names)}  ${randomizer(names)}`,
    baseArchetype: generateBaseArchetype(),
    ideal: randomizer(ideals),
    trait: randomizer(traits),
    flaw: randomizer(flaws),
    // This is only one stat block currently
    stats: stats
  }
  return block
}

export { ArchetypeBlock, generateArchetypeBlock }
