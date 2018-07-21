"use strict";
//The goal of this module is to create vibrant multifacited gender profiles.


// Returns a complex gender object.
// Example: {rt: {gen:'girl', pron: 'she/her'}, desc: ['androgynous'] }
// TODO clean this the heck up.
function generate_gender() {
  var root = randomizer(gender_roots);
  var descriptor = randomizer(gender_descriptors);
  return {rt: root, desc: descriptor};
}

// Retruns a string which describes a persons romantic and sexual attractions.
function generate_attraction() {
  var tempattraction_rom =  randomizer(attraction_descriptor);
  var tempattraction_sex =  randomizer(attraction_descriptor);
  return randomizer(tempattraction_rom) + 'romantic' + '/' +
    randomizer(tempattraction_sex) + 'sexual';
}

// Retruns a string of a random pronoun.
function generate_pronoun() {
  return randomizer(pronouns);
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
