// Immediately Invoked Function Expression (IIFE) - before modules code is executed , node will wrap it with function wrapper that provides module scope
// avoids conflicts in variables and functions
(function(message){
    const superHero = "Batman";
    console.log(message, superHero);
})('Hello'); // module wrapper

(function(message){
    const superHero = "Superman";
    console.log(message, superHero);
})('Hey');