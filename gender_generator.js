var gender_descriptors = [
  '', 'androgynous', 'butch', 'bigender', 'demi', 'fake', 'femme', 'fluid',
  'hairy','non-binary', 'non-conforming', 'pangender', 'sparkle', 'spooky',
  'trans',
];
// TODO: 'bigender' and 'pangender' tags to have 2 or 3 gender articles.

var gender_articles = [
  'agender', 'boy', 'enby', 'epicine', 'ghost', 'goth', 'girl', 'intersex',
  'man', 'neutrois', 'gender-questioning', 'queer', 'woman',
];
/* I have left out cultural genders that are not a part of my culture, as that
* I intend to use this for storytelling, and do not feel comfortable co-opting
* other cultures as part of my storytelling. Research, caution, intenitonality,
* and above all respect would be nescisary, as such I don't think it's
* appropriate to include in a random generator.
*/
// TODO: it would be great to have pronoun tags related to gender article
// TODO: Add switch to include genders from other cultures, to avoid exclusion, such as Hijra, Two-spirit, and other Third genders.

var pronouns = [
  'ey/em', 'gein/gein', 'he/him', 'one/one', 'she/her', 'sie/sie', 'tey/ter', 'they/them',
  've/ver', 'zie/zim',
];
// Note: gein is a gender nuetral pronoun in my storytelling used by dragons
// Note: Honestly, I'd love to weigh these pronouns, based on gender_article
// TODO: gein switch.

function _randomizer(array){
  return  array[Math.floor(Math.random()* array.length)];
}

function generate_gender() {
  return _randomizer(gender_descriptors) + ' ' + randomizer(gender_articles);
}

function generate_pronoun() {
  return _randomizer(pronouns);
}
