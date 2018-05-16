var gender_descriptors = [
  '', 'androgynous', 'butch', 'bigender', 'demi', 'femme', 'fluid', 'hairy',
  'hard', 'masculine', 'non-binary', 'non-conforming', 'pangender', 'sparkle',
  'trans',
];
// TODO: 'bigender' and 'pangender' tags to have 2 or 3 gender articles.

var gender_roots = [
  {gen:'agender', pron: 'they/them'}, {gen:'boy', pron: 'he/him'},
  {gen:'enby', pron: 'they/them'}, {gen:'epicine', pron: 'they/them'},
  {gen:'girl', pron: 'she/her'}, {gen:'man', pron: 'he/him'},
  {gen:'nuetrois', pron: 'they/them'},
  {gen:'gender-questioning', pron: 'they/them'},
  {gen:'queer', pron: 'they/them'},
  {gen:'woman', pron: 'she/her'},
];
/* I have left out cultural genders that are not a part of my culture, as that
* I intend to use this for storytelling, and do not feel comfortable co-opting
* other cultures as part of my storytelling. Research, caution, intenitonality,
* and above all respect would be nescisary, as such I don't think it's
* appropriate to include in a random generator.
*/
// TODO: Add switch to include genders from other cultures, to avoid exclusion,
// such as Hijra, Two-spirit, and other Third genders.

var pronouns = [
  'ey/em', 'gein/gein', 'he/him', 'she/her', 'sie/sie', 'tey/ter',
  'they/them','ve/ver', 'zie/zim',
];
// Note: gein is a gender nuetral pronoun in my storytelling used by dragons
// TODO: gein switch.

var attraction_descriptor = [
  ['a'], ['bi-'], ['demi(bi)-', 'demi(hetero)-',
  'demi(homo)-', 'demi(pan)-'], ['fray(bi)-',
  'fray(hetero)-','fray(homo)-', 'fray(pan)-'],
  ['gray(bi)-', 'gray(hetero)-', 'gray(homo)-',
  'gray(pan)-'], ['hetero-', 'hetero-flexible-'],
  ['homo-', 'homo-flexible-'], ['pan'],
];


function _randomizer(array){
  return  array[Math.floor(Math.random()* array.length)];
}

function flipcoin() {
  var coin = [0,1];
  var flip = _randomizer(coin);
  if (flip === 1) {
    return true;
  } else {
    return false;
  }
}

function generate_gender() {
  var root = _randomizer(gender_roots);
  var descriptor = _randomizer(gender_descriptors);
  return {rt: root, desc: descriptor};
}

function generate_attraction() {
  var tempattraction_rom =  _randomizer(attraction_descriptor);
  var tempattraction_sex =  _randomizer(attraction_descriptor);
  return _randomizer(tempattraction_rom) + 'romantic' + '/' +
    _randomizer(tempattraction_sex) + 'sexual';
}

function generate_pronoun() {
  return _randomizer(pronouns);
}


function generate_personality() {
  var attraction = generate_attraction();
  var gender = generate_gender();
  var prnoun = '';
  if (flipcoin()) {
    pronoun = gender.rt.pron;
  } else {
    pronoun = generate_pronoun();
  }
  return gender.desc + ' ' + gender.rt.gen + ' with ' + pronoun + ' pronouns, who is ' + attraction;
}

generate_personality();
