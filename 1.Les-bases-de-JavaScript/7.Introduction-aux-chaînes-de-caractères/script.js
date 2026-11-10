/* 
    Les chaînes de caractères, ou string en anglais, permettent de représenter du texte.
*/

/* 
    1. Intégrer des expressions dans des chaînes de caractères.
*/

let money = 457;
const message = `Vous avez ${money}€ sur votre compte.`;
/* Ancienne façon de faire */
/* Compliqué de faire des retours à la ligne \n, d'intégrer des expressions, échapper les apostrophes/guillemets, etc... */
const message1 = "Vous avez " + money + "€ sur votre compte.";

/* "Nouvelle" façon de faire (2015+), cela permet de prendre en compte les retours à la ligne, d'éviter d'échapper les apostrophes, et facilite grandement l'intégration d'expression dans les chaînes.  */
/* On peut faire des calculs et appeler des fonctions dans les accolades. */
const message2 = `Vous avez ${money * 2}€ sur votre compte.`;

/* 
    2. La concaténation, ou l'assemblage de plusieurs chaînes.
*/

const chunk1 = "abc";
const chunk2 = "def";
const chunk3 = chunk1 + chunk2; // abcdef
console.log("abc" + 99); // abc99
// 99 est converti en string et concaténé à "abc"

/* 
    3. Quelques astuces : Sélectionner un caractère, retourner la longueur, etc...
*/

const userName = "Léonard de Vinci";
console.log(userName[0]); // L
console.log(userName.length); // 15
console.log(userName.indexOf("de")); // 8
