/*eslint-env es6*/
//The goal of this module is to create vibrant multifacited gender profiles.

/* I have left out cultural genders that are not a part of my culture, as that
* I intend to use this for storytelling, and do not feel comfortable co-opting
* other cultures as part of my storytelling. Research, caution, intenitonality,
* and above all respect would be nescisary, as such I don"t think it"s
* appropriate to include in a random generator.
*/

// TODO: Add switch to include genders from other cultures, to avoid exclusion.
// such as hijra, two-spirit, and other third genders.
// Be sure to have a sensitivity reader check it over, and pay them for their work.
// Note: gein is a gender nuetral pronoun in my storytelling used by dragons
// TODO: gein switch.
// TODO: Increase likelyhood of gein as pronoun if draconic

import * as genderJSON from "./JSON/gender.json"
import { dieRoll, randomizerCount, randomizer, flipCoin } from "./randomizers"


const genderRoots: string[] = (<any>genderJSON).genderRoots
const genderDescriptors: string[] = (<any>genderJSON).genderDescriptors
const attractionRoots: string[] = (<any>genderJSON).attractionRoots
const attractionDescriptors: string[] = (<any>genderJSON).attractionDescriptors
const pronouns: string[] = (<any>genderJSON).pronouns


type GenderRoot = {
  gen: string,
  pronoun: string
}

type GenderObject = {
  rts: GenderRoot[]
  desc: string
}


/**
 * Returns a complex GenderObject.
 */
function generate_gender(): GenderObject {
  const fivePercent: number = dieRoll(20)
  let descriptor: string = ''
  let genRoots: GenderRoot[]
  if (fivePercent == 19) {
    descriptor = 'bigender'
    genRoots = randomizerCount(genderRoots, 2)
  } else if (fivePercent == 20) {
    descriptor = 'pangender'
    const numberOfGenders = dieRoll(4 + 1)
    genRoots = randomizerCount(genderRoots, numberOfGenders)
  } else {
    descriptor = randomizer(genderDescriptors)
    genRoots = [randomizer(genderRoots)]
  }
  const gender: GenderObject = {
    rts: genRoots,
    desc: descriptor
  }
  return gender
}

/**
 * Retruns a string which describes a persons romantic and sexual attractions.
 */
function generate_attraction(): string {
  var variablePercent: number = dieRoll(10)
  if (variablePercent <= 6) {
    // Same Sexuality/Romantic, Same Descriptor
    const tempRoot: string = randomizer(attractionRoots)
    let tempDescription: string = ''
    if (tempRoot !== "a") {
      tempDescription = randomizer(attractionDescriptors)
    }
    const tempBothProfile: string = tempDescription + tempRoot
    const result: string = `${tempBothProfile}romantic / ${tempBothProfile}sexual`
    return result

  } else if (variablePercent == 7) {
    // Same Sexuality/Romantic, Shuffled Descriptor
    const tempRoot = randomizer(attractionRoots)
    let tempSexDescription: string = ''
    let tempRomDescription: string = ''
    if (tempRoot !== "a") {
      tempSexDescription = randomizer(attractionDescriptors)
      tempRomDescription = randomizer(attractionDescriptors)
    }
    const tempRomProfile: string = tempRomDescription + tempRoot
    const tempSexProfile: string = tempSexDescription + tempRoot
    const result: string = `${tempRomProfile}romantic / ${tempSexProfile}sexual`
    return result

  } else {
    // Shuffled Sexuality/Romantic, Shuffled Descriptor
    const tempRomRoot = randomizer(attractionRoots)
    const tempSexRoot = randomizer(attractionRoots)
    let tempRomDescription: string = ''
    let tempSexDescription: string = ''
    if (tempRomRoot !== "a") {
      tempRomDescription = randomizer(attractionDescriptors)
    }
    if (tempSexRoot !== "a") {
      tempSexDescription = randomizer(attractionDescriptors)
    }
    const tempRomProfie: string = tempRomDescription + tempRomRoot
    const tempSexProfile: string = tempSexDescription + tempSexRoot
    return `${tempRomProfie}romantic / ${tempSexProfile}sexual`
  }
}

/**
 * Retruns a string of a random pronoun set.
 */
function generate_pronoun(): string {
  return randomizer(pronouns)
}

/**
 * Retruns a string describing a persons gender, pronouns, and their attraction.
 * Pronouns are weighted ~50%/50% of being the typical pronoun for said gender.
 */
export function generatePersonality(): string {
  const attraction: string = generate_attraction()
  const gender: GenderObject = generate_gender()
  let pronoun = ''
  if (flipCoin()) {
    pronoun = gender.rts[0].pronoun
  } else {
    pronoun = generate_pronoun()
  }
  const genders: string[] = gender.rts.map(g => g.gen)
  const personality: string = `${gender.desc} ${genders.join(' ')} with ${pronoun} pronouns, who is ${attraction}`
  return personality
}
