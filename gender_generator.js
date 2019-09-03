"use strict";
/*eslint-env es6*/
//The goal of this module is to create vibrant multifacited gender profiles.
exports.__esModule = true;
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
var genderJSON = require("./JSON/gender.json");
var randomizers_1 = require("./randomizers");
var genderRoots = genderJSON.genderRoots;
var genderDescriptors = genderJSON.genderDescriptors;
var attractionRoots = genderJSON.attractionRoots;
var attractionDescriptors = genderJSON.attractionDescriptors;
var pronouns = genderJSON.pronouns;
/**
 * Returns a complex GenderObject.
 */
function generate_gender() {
    var fivePercent = randomizers_1.dieRoll(20);
    var descriptor = '';
    var genRoots;
    if (fivePercent == 19) {
        descriptor = 'bigender';
        genRoots = randomizers_1.randomizerCount(genderRoots, 2);
    }
    else if (fivePercent == 20) {
        descriptor = 'pangender';
        var numberOfGenders = randomizers_1.dieRoll(4 + 1);
        genRoots = randomizers_1.randomizerCount(genderRoots, numberOfGenders);
    }
    else {
        descriptor = randomizers_1.randomizer(genderDescriptors);
        genRoots = [randomizers_1.randomizer(genderRoots)];
    }
    var gender = {
        rts: genRoots,
        desc: descriptor
    };
    return gender;
}
/**
 * Retruns a string which describes a persons romantic and sexual attractions.
 */
function generate_attraction() {
    var variablePercent = randomizers_1.dieRoll(10);
    if (variablePercent <= 6) {
        // Same Sexuality/Romantic, Same Descriptor
        var tempRoot = randomizers_1.randomizer(attractionRoots);
        var tempDescription = '';
        if (tempRoot !== "a") {
            tempDescription = randomizers_1.randomizer(attractionDescriptors);
        }
        var tempBothProfile = tempDescription + tempRoot;
        var result = tempBothProfile + "romantic / " + tempBothProfile + "sexual";
        return result;
    }
    else if (variablePercent == 7) {
        // Same Sexuality/Romantic, Shuffled Descriptor
        var tempRoot = randomizers_1.randomizer(attractionRoots);
        var tempSexDescription = '';
        var tempRomDescription = '';
        if (tempRoot !== "a") {
            tempSexDescription = randomizers_1.randomizer(attractionDescriptors);
            tempRomDescription = randomizers_1.randomizer(attractionDescriptors);
        }
        var tempRomProfile = tempRomDescription + tempRoot;
        var tempSexProfile = tempSexDescription + tempRoot;
        var result = tempRomProfile + "romantic / " + tempSexProfile + "sexual";
        return result;
    }
    else {
        // Shuffled Sexuality/Romantic, Shuffled Descriptor
        var tempRomRoot = randomizers_1.randomizer(attractionRoots);
        var tempSexRoot = randomizers_1.randomizer(attractionRoots);
        var tempRomDescription = '';
        var tempSexDescription = '';
        if (tempRomRoot !== "a") {
            tempRomDescription = randomizers_1.randomizer(attractionDescriptors);
        }
        if (tempSexRoot !== "a") {
            tempSexDescription = randomizers_1.randomizer(attractionDescriptors);
        }
        var tempRomProfie = tempRomDescription + tempRomRoot;
        var tempSexProfile = tempSexDescription + tempSexRoot;
        return tempRomProfie + "romantic / " + tempSexProfile + "sexual";
    }
}
/**
 * Retruns a string of a random pronoun set.
 */
function generate_pronoun() {
    return randomizers_1.randomizer(pronouns);
}
/**
 * Retruns a string describing a persons gender, pronouns, and their attraction.
 * Pronouns are weighted ~50%/50% of being the typical pronoun for said gender.
 */
function generatePersonality() {
    var attraction = generate_attraction();
    var gender = generate_gender();
    var pronoun = '';
    if (randomizers_1.flipCoin()) {
        pronoun = gender.rts[0].pronoun;
    }
    else {
        pronoun = generate_pronoun();
    }
    var genders = gender.rts.map(function (g) { return g.gen; });
    var personality = gender.desc + " " + genders.join(' ') + " with " + pronoun + " pronouns, who is " + attraction;
    return personality;
}
exports.generatePersonality = generatePersonality;
