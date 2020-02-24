import * as ancestryJSON from "../JSON/ancestry.json"
import * as archetypeJSON from "../JSON/archetype.json"
import * as namesJSON from "../JSON/names.json"
import * as npcBlockJSON from "../JSON/npcBlock.json"
import { dieRoll, randomizerCount, randomizer, flipCoin } from "./randomizers"
import { generateAncestry, FullAncestry } from "./ancestry_generator";
import { generateArchetypeBlock, ArchetypeBlock } from "./archetype_generator";
import { generatePersonality } from "./gender_generator";
import { randomizer, dieRoll } from "./randomizers";
import { randomizer, dieRoll, randomizerCount } from "./randomizers"

// Bringing Constants in from JSON
const ideals: string[] = (<any>archetypeJSON).archetypeIdeals
const traits: string[] = (<any>archetypeJSON).archetypeTraits
const flaws: string[] = (<any>archetypeJSON).archetypeFlaws

export type NPC = {
  "ancestry": FullAncestry,
  "archetype": ArchetypeBlock,
  "gender": string
}

export type SkillSave = {
  name: string,
  profBonus: number,
  abilityBonus: number,
  miscBonus: number,
  total: number,
}

export type SenseMove = {
  name: string,
  distance: number,
}

export type Attack = {
  weaponName: string,
  meleeOrRanged: string,
  spellOrWeapon: string,
  thaco: number,
  reach: number || boolean,
    range: boolean || {
      close: number,
      far: number
    }
damage: {
  numberOfDice: number,
    dieSize: number,
      damageType: string,
        averageDamage: number
  rider: string
}
}

const generateAbility = (): number => {
  return dieRoll(6) + dieRoll(6) + dieRoll(6)
}

const calculateMod = (ability: numberr): number => {
  return Math.floor((ability - 10)/2)
}


export class NPC {
  firstName: string,
  secondName: string,
  personality: string
  ideal: string,
  bond: string,
  flaw: string,
  size: string
  types: string[],
  subTypes: string[],
  armorClass: number,
  hitPoints: number,
  hitDice: number,
  speeds: SenseMove[],
  senses: SenseMove[],
  abilities: {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
  }
  saves: SkillSave[],
  skills: SkillSave[],
  languages: string[],
  special: string[],
  challenge: number,
  actions: (Attack || string)[]

  constructor() {
    ancestry: AncestryObj = generateAncestry()
    archetype: ArchetypeBlock = generateArchetypeBlock()
    // gender: GenderObject =

    this.firstName = randomizer(names)
    this.secondName = randomizer(names)
    this.personality = generatePersonality()
    this.ideal = randomizer(ideals)
    this.trait = randomizer(traits)
    this.flaw = randomizer(flaws)

    this.size = AncestryObj.baseSize
    // TODO: reconcile if subrace/template changes size

    this.types = AncestryObj.types
    // TODO: reconcile if subrace/template changes types

    this.subTypes = AncestryObj.subTypes
    // TODO: reconcile if subrace/template changes types

    this.speeds = AncestryObj.speeds || [30]
    // TODO: reconcile if subrace/template changes types

    this.senses = AncestryObj.senses || []
    // TODO: reconcile if subrace/template changes types

    this.abilities = {
      str:  generateAbility(),
      dex:  generateAbility(),
      con:  generateAbility(),
      int:  generateAbility(),
      wis:  generateAbility(),
      cha:  generateAbility(),
    }
    let strMod = calculateMod(this.abilities.str)
    let dexMod = calculateMod(this.abilities.dex)
    let conMod = calculateMod(this.abilities.con)
    let intMod = calculateMod(this.abilities.int)
    let wisMod = calculateMod(this.abilities.wis)
    let chaMod = calculateMod(this.abilities.cha)

    this.armorClass = 10 + dexMod
    // TODO: reconcile if natural armor and for Armor Profs

    this.hitDice = ArchetypeBlock.hitDice

    this.hitPoints = Math.floor((4.5 + conMod) * this.hitDice)
    // TODO: reconcile for different sizes of creatures (d6s, d10s, and d12s)

    // TODO: reconcile all below
    this.saves = []
    this.skills = []
    this.languages = []
    this.special = []
    this.challenge = 0
    this.actions = []

  }
}

export const  newNpc = new NPC()
