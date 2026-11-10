/* 
    En JavaScript, il existe plusieurs types permettant de manipuler des valeurs avec des comportements et des caractéristiques différents.
*/

/* 
    NUMBER : Le type nombre représente un nombre entier ou à virgule entre 9007199254740991 et 9007199254740992.
    Au-delà de ces nombres, les calculs ne sont plus fiables et nous pouvons utiliser un nouveau type bigInt.
*/

/*  
    STRING : Le type représentant des chaînes de caractères.
    On peut utiliser la longueur de la chaîne grâce à length.
    On peut accéder à une lettre avec la bracket notation.
*/

const userName = "paul";
console.log(userName);
console.log(userName.length);
console.log(userName[0]);
console.log(typeof userName);

/* 
    BOOLEAN : Un type représentant une valeur vraie(true) ou fausse(false).
*/
let isAdult = false;
console.log(isAdult);
console.log(typeof isAdult);

/* 
    UNDEFINED : Le type représentant une valeur non-définie, 
    typiquement quand une variable n'a pas encore reçue de valeurs.
*/
let piece;
console.log(typeof piece);

/* 
    NULL : Ce type réprente une valeur qui n'existe pas, 
    typiquement quand on essaye d'utliser une variable non créée. 
*/
console.log(typeof null); // 🌋Attention, typeof null renvoie "object" mais ce n'est pas un objet. C'est un bug historique du langage.
/* 
    BIGINT : Ce type représente des nombres très grands.
    Il a été rajouté récemment pour palier à des problèmes assez rares.
*/
console.log(typeof 9007199254740992n); // 🌋Le n à la fin du nombre permet de le déclarer comme un BigInt
/* 
    SYMBOL : Un symbole est un identifiant unique qui permet d’éviter des collisions entre des valeurs similaires.
    À ce stade de votre apprentissage, il ne vous sert à rien de vous pencher dessus.
*/
//⚠️ il peermet de créer des id uniques

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
/* 
    OBJECT : Un objet est un container de propriétés représentant des valeurs.
    On appelle une propriété "méthode" lorsque sa valeur est une fonction.
    C'est un type très important, qu'il faut maîtriser et qui représente une grande partie du fonctionnement du langage JavaScript.
*/
const norway = {
  name: "Norway",
  capital: "Oslo",
  getCapital: function () {
    return this.capital;
  },
  getSquare: function (a) {
    return a * a;
  },
};
console.log(typeof norway); // object
console.log(norway.name); // Norway
/* 
    FUNCTION : Les fonctions sont ... des objets ! Même si typeof nous donne le "type" function, ce sont bien des objets éxécutables. 
    Nous verrons le fonctionnement des fonctions en détail dans ce cours, regardons simplement un exemple classique. 
*/
function getSquare(a) {
  //le a est un parametre
  return a * a;
}
console.log(getSquare(2)); // 4 // le 2 est un argument
/* 
    ARRAY : Les tableaux sont ... également des objets ! 
    Mais alors, pourquoi les avoir créés ? Afin d'exploiter certaines propriétés et méthodes très pratiques, propres aux tableaux, comme la propriété length, ou les méthodes .map(), .filter(), etc ...
    Nous reviendrons également très en détail sur les tableaux.
*/

// On accède aux élément d'un tableau grâce à l'indice de ce dernier qui commence à 0
// C'est à dire que le premier élément est à l'indice 0.

const salaries = [1000, 2000, 3000];
console.log(salaries[0]);
console.log(typeof salaries); // object

salaries.forEach((salary) => {
  console.log(salary);
});
