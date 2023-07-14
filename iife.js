// Immediately Invoked Function Expression (IIFE) - before modules code is executed , node will wrap it with function wrapper that provides module scope
// avoids conflicts in variables and functions
(function(){
    const superHero = "Batman";
    console.log(superHero);
})();

(function(){
    const superHero = "Superman";
    console.log(superHero);
})();