/* 
    1. L'instruction Switch

    Un Switch permet de créer une série de conditions vérifiant une expression.
    C'est une alternative aux [if...else if() ... else if() etc...].
    Elle est cependant moins utilisée en général.

*/

const tShirtSize = "M";
switch (tShirtSize) {
  case "S":
    console.log("Vous avez choisi un t-shirt de taille S");
    break;
  case "M":
    console.log("Vous avez choisi un t-shirt de taille M");
    break;
  default:
    console.log("Vous avez choisi un t-shirt de taille L");
}
