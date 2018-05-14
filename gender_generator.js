var gender_descriptors = ['femme ', 'butch ', ''];
var gender_articles = ['woman', 'man', 'enby'];

function randomizer(array){
  return  array[Math.floor(Math.random()* array.length)];
}

function generate_gender() {
  return randomizer(gender_descriptors) +  randomizer(gender_articles);
}

generate_gender();
