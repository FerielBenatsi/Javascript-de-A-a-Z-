/* 
    Une variable est le nom d'un emplacement dans la mémoire de votre ordinateur permettant de stocker des valeurs et de les utiliser dans le code. 
*/

/* let */
let c ;
let mainCharacter = "Mario";
console.log(mainCharacter); // Mario
//🌋
//console.log(x); // ❌ ReferenceError
//let x = 10;
//
/* ⚠️Impossible d'utiliser let et const avant de les déclarer */

/* ⚠️Impossible de redéclarer une let ou const avec le même nom */

/* const */
const i = "Luigi"; //ilfaut tjr lui assigné une valeur 
/* var */
var x = 10;
var x = 20; //🌋possible de redéclarer une var avec le même nom 

//🌋La variable reste accessible en dehors du bloc if.
if(true){
    var nom = "Mario";

}
console.log(nom); // Mario 
//🌋JavaScript connaît déjà la déclaration de x, mais pas encore sa valeur.
console.log(n); //undefined 
/* ⚠️ Attention, on ne peut pas déclarer de constante sans les initialiser, contrairement aux var et let. */
