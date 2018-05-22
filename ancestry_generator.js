//The goal of this module is to create vibrant ancestry profiles for nonplayer characters.

// import { randomizer, flipcoin } from './randomizers.js';

var ancestryObjects = [
  {
    rt: 'Dragonborn',
    subs: [
      'Deep', 'Desert', 'Ethereal', 'Forest', 'Glimmering', 'Howling', 'Mountain', 'Ocean', 'Petite Kobold',
      'Prismatic', 'Storm', 'Styx', 'Swamp', 'Tundra', 'Winged Kobold',
    ]
  },
  {
    rt: 'Dryad',
    subs: [
      'Cactid', 'Deku', 'Mycanoid', 'Folian', 'Thorne', 'Spriggan',
    ]
  },
  {
    rt: 'Dwarf',
    subs: [
      'Deep', 'Desert', 'Frost', 'Hill', 'Mountain', 'Shovel',
    ]
  },
  {
    rt: 'Elves',
    subs: [
      'Deep', 'High', 'Gold', 'Grey', 'Wood', 'Winged',
    ]
  },
  {
    rt: 'Faunus',
    subs: [
      'Armand', 'Bah\'it', 'Bullywog', 'Carcharodon', 'Darfallen', 'Dortakoid', 'Gekkin', 'Gnoll', 'Kenku',
      'Kitsune', 'Lacertillian', 'Remm', 'Sarukai', 'Stricade', 'Taurin', 'Tawaki', 'Thri-kreen', 'Ursine',
    ]
  },
  {
    rt: 'Halfling',
    subs: [
      'Deep Gnome', 'Foreset Gnome', 'Kender', 'Lightfoot', 'Rock Gnome', 'Stout', 'Tallfellow', 'Tinker Gnome',
    ]
  },
  {
    rt: 'Human',
    subs: [
      'Changeling', 'Cyclops', 'Elan', 'Gerudo', 'Siarran', 'Weaver', 'Zshar',
    ]
  },
  {
    rt: 'Jotborn',
    subs: [
      'Goliath', 'Goron', 'Formian Kith', 'Varl',
    ]
  },
  {
    rt: 'Merfolk',
    subs: [
      'Malenti', 'Syren', 'Merrow', 'Zora',
    ]
  },
  {
    rt: 'Planarborn',
    subs: [
      'Aaismar', 'Air Genasi', 'Death Genasi', 'Earth Genasi', 'Fire Genasi', 'Life Genasi', 'Water Genasi',
      'Maeluth', 'Mechantri', 'Neraphim', 'Norani', 'Shyft', 'Tanaruk', 'Tiefling', 'Zerythri', 'Gith',
    ]
  },
  {
    rt: 'Transforged',
    subs: [
      'Adamantine', 'Darkwood', 'Deep-Crystal', 'Mithral',
    ]
  },
  {
    rt: 'Vogul',
    subs: [
      'Bugbear', 'Blue', 'Goblin', 'Hobgoblin', 'Orc', 'Troll'
    ]
  },
];

var templates = [
  'Demigod',
  'Dvati',
  'Eleti',
  'Half Dragonborn',
  'Half Dryad',
  'Half Dwarf',
  'Half Elf',
  'Half Faunus',
  'Half Halfling',
  'Half Human',
  'Half Jotborn',
  'Half Merfolk',
  'Half Planarborn',
  'Half Transforged',
  'Half Vogul',
  'Gargoyle',
  'Kentari',
  'Lich',
  'Shade',
  'Soulstiched',
  'Spellwarped',
  'Therianthrope',
  'Vampire',
];
