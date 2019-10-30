import { generateAncestry, FullAncestry } from "./ancestry_generator";
import { generateArchetypeBlock, ArchetypeBlock } from "./archetype_generator";
import { generatePersonality, GenderObject } from "./gender_generator";

export type NPC = {
    "ancestry": FullAncestry,
    "archetype": ArchetypeBlock,
    "gender": string
}

export function generateNPC(): NPC {
    const ancestry: FullAncestry = generateAncestry()
    const archetype: ArchetypeBlock = generateArchetypeBlock()
    const gender: string = generatePersonality()
    return {
        "ancestry": ancestry,
        "archetype": archetype,
        "gender": gender
    }
}