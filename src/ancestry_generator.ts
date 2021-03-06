/*eslint-env es6*/
//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.


import * as ancestryJSON from "../JSON/ancestry.json"
import { randomizer, dieRoll, randomizerCount } from "./randomizers"


type SubAncestryObj = {
  name: string,
  size: string
}


type AncestryObj = {
  "rt": string,
  "types": string[],
  "subTypes": string[],
  "baseSize": string,
  "subs": SubType[]
}

type Template = {
  "name": string,
  "typeChange"?: string,
  "sizeChange"?: string,
  "beasts"?: string[],
  "newsubTypes": string[]
}

export type FullAncestry = {
  "types": string,
  "ancestry": string
}


const ancestries: AncestryObj[] = (<any>ancestryJSON).ancestries
//  Templates JSON not shcema'd or validated
// const templates: Template[] = (<any>ancestryJSON).templates


/**
 * Returns a constrcuted ancestry string from random ancestryObject
 * and a random subrace from the ancestryObject, with a 10% chance
 * of returning a templated ancestry.
 */
export function generateAncestry(): FullAncestry {
  // let newsubTypes: string = ""
  const currentAncestry: AncestryObj = randomizer(ancestries)
  // const currentSubAncestry: SubType = randomizer(currentAncestry.subs)

//------- TEMPLATE STUFF --------------//
  const tenPercent: number = dieRoll(10)

  if (tenPercent == 10) {
    let newSize: string = ''
    let newTypes: string = ''
    let beast: string = ''
    const templateBasket: Template[] = randomizerCount(templates, 2)

    let currentTemplate: Template = templateBasket[0]
    if (currentAncestry.subTypes[0] === currentTemplate.newsubTypes[0]) {
      currentTemplate = templateBasket[1]
      console.log("Using the second template!")
    }
    if (currentTemplate.sizeChange) {
      newSize = `${currentTemplate.sizeChange}`
    }
    if (currentTemplate.typeChange) {
      newTypes = `, ${currentTemplate.typeChange} `
    }
    if (currentTemplate.beasts) {
      const beastChoice = randomizer(currentTemplate.beasts)
      beast = `${beastChoice}-`
    }
    return {
      types: `${currentSubObj.size} ${newSize} ${currentAncestry.types.
        join("/")} ${newTypes} (${currentAncestry.subTypes.
          join(", ")}, ${currentTemplate.newsubTypes.
            join(", ")})`,
      ancestry: `${beast}${currentTemplate.name} ${currentAncestry.rt}`
    }
  } else {
//------- TEMPLATE STUFF --------------//
    return currentAncestry
    }
  }
}
