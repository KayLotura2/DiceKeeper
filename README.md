# DiceKeeper
An advanced NPC generator for D&D 5e and similar games that randomizes an NPC's ancestry, archetype, personality profile, gender, and orientation.

## Setup

* Currently this project is a work in progress.
* To use, clone or download the repository.
* Open command line and run:
    * `tsc src/ancestry_generator.ts src/archetype_generator.ts src/gender_generator.ts src/randomizers.ts --target es6`
* Drag the index.html to your browser
  * Chrome is supported, it hasn't been tested on other browsers yet
* Reload page to generate a new NPC
* Currently there is no way to save an NPC block
  * This will be a later feature

## Usage

Currently this is a simple tool for quickly generating complex NPCs for D&D 5e or similar games on the fly. Other than refreshing the index page there are no further uses at this time.

#### Bugs

* Undefined error in Profile Generator
* Ideal is improperly labeled.
* Ancestry is lacking a label
* NPC Block is a static Commoner, with no information. (WIP)

## Status: Incomplete.


## Thanks

* Thanks to Dominic Tarr for use of name.JSON from (`random-names`)[https://github.com/dominictarr/random-name]
