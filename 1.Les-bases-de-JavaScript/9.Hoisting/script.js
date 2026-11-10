/* 
    1. Le "Hoisting"

    L'hissage, est la façon dont les variables déclarées avec var et les déclarations de fonction se font analyser en premier et "hisser" en haut du code lors de l'execution d'un fichier JS. 
    Cela les rend donc accessibles à tout le reste du code, même si les variables et fonctions sont déclarées après leur utilisation.

    Les var retourneront néanmoins undefined, car elles sont analysées sans qu'on leur assigne de valeur...
    La valeur est assignée au moment où la ligne de la var se fait exécuter, après le hissage.
    Cela fait partie des nombreux comportements problématiques des var, d'où la création de let&const.

    Attention, il n'y a pas de hoisting avec les let & const. 
*/

//⚠️ on peut loger une var avant de la déclarer
console.log(myVar); // undefined
var myVar = 10;

console.log(age); //error
let age = 20; // ReferenceError: Cannot access 'age' before initialization
// meme chose avec const

//⚠️⚠️⚠️ quand le parser rencontre une var il la met en haut de fichier mais sans luii attribuer une valeur , il lui assigne sa valeur quand il arrive a la ligne de code ou elle est déclarée.

myFunction(); // "foo"
function myFunction() {
  console.log("foo");
}
// la meme chose il mets toutes les déclarations des functions en haut quand cest declarer 'function"

// ici on bloque le comportement de hoisting
foo(); // TypeError: foo is not a function
const foo = function () {
  console.log("foo");
};

console.log(function () {
  console.log("foo");
}); // ca affiche la fnct , ce nest pas une string mais plutot un objet compelt

const loo = function (param1, param2) {
  console.log("foo");
};

loo(); // ca affiche foo
console.log(loo); // ca affiche la fnct (expression function)
console.dir(loo); // ca affiche la declaration de la fnct avec ses proprietes  en mode objet 

console.log(function(){
    console.log("foo");
}); // ca affiche f anonymous


