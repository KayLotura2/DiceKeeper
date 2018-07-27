"use strict";
//The goal of this module is to create vibrant multifacited gender profiles.

/* I have left out cultural genders that are not a part of my culture, as that
* I intend to use this for storytelling, and do not feel comfortable co-opting
* other cultures as part of my storytelling. Research, caution, intenitonality,
* and above all respect would be nescisary, as such I don"t think it"s
* appropriate to include in a random generator.
*/
// TODO: Add switch to include genders from other cultures, to avoid exclusion,
// such as hijra, two-spirit, and other third genders.
// Note: gein is a gender nuetral pronoun in my storytelling used by dragons
// TODO: gein switch.
// TODO: Increase likelyhood of gein as pronoun if draconic

// Returns a complex gender object.
// Example: {rt: {gen:'girl', pron: 'she/her'}, desc: ['androgynous'] }
// TODO clean this the heck up.
function generate_gender() {
    var fivePercent = dieRoll(20);
    if (fivePercent == 19) {
        var descriptor = 'bigender';
        var roots = randomizerCount(genderJSON.genderRoots, 2)
    } else if (fivePercent == 20) {
      var descriptor = 'pangender';
      var numberOfGenders = dieRoll(4)
      var roots = randomizerCount(genderJSON.genderRoots, numberOfGenders)
    } else {
      var descriptor = randomizer(genderJSON.genderDescriptors);
      var roots = randomizer(genderJSON.genderRoots);
    }
  return {rt: roots, desc: descriptor};
}

// Retruns a string which describes a persons romantic and sexual attractions.
function generate_attraction() {
  var tempattraction_rom =  randomizer(genderJSON.attractionDescriptors);
  var tempattraction_sex =  randomizer(genderJSON.attractionDescriptors);
  return randomizer(tempattraction_rom) + 'romantic' + '/' +
    randomizer(tempattraction_sex) + 'sexual';
}

// Retruns a string of a random pronoun.
function generate_pronoun() {
  return randomizer(genderJSON.pronouns);
}

// Retruns a string describing a persons gender, pronouns, and their attraction.
// Pronouns are weighted ~50%/50% of being the typical pronoun for said gender.
function generatePersonality() {
  var attraction = generate_attraction();
  var gender = generate_gender();
  var pronoun = '';
  if (flipCoin()) {
    pronoun = gender.rt.pron;
  } else {
    pronoun = generate_pronoun();
  }
  return gender.desc + ' ' + gender.rt.gen + ' with ' + pronoun + ' pronouns, who is ' + attraction;
}
