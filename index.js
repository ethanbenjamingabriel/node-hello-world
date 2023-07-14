// commonJS: how to properly share modules from one file to another 
const math = require('./math');
const { add, subtract } = math;
const SuperHero = require('./super-hero');

// Module Scope
require('./batman');
require('./superman');

console.log("Hello World!");

console.log(add(2,3));
console.log(subtract(2,3));

/*
const superHero = require('./super-hero'); // saved in cache
console.log(superHero.getName()); // print Batman
superHero.setName('Superman'); // Superman
console.log(superHero.getName()); // print Superman

const newSuperHero = require('./super-hero');
console.log(newSuperHero.getName()); // print Superman (line 15 is loaded and cached, so line 20 isn't new, it reuses old load instead of reloading object)
*/

// saves in cache once and creates multiple instances of class
const superHero = require('./super-hero');
const batman = new SuperHero('Batman');
console.log(batman.getName());
batman.setName('Bruce Wayne');
console.log(batman.getName());

const superman = new superHero('Superman');
console.log(superman.getName());