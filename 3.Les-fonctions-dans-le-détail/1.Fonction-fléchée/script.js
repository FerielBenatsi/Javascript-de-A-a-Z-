/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

// function getSquareArea(side) {
//   return side * side;
// }

// const getSquareArea = (side) => {
//   return side * side;
// };

// on a un seul return pas besoin de lecrire et pas besoin de mettre {} et () pour les parametre
const getSquareArea = (side) => side * side;

[1, 2, 3].forEach((item) => console.log(item)); // 1, 2, 3
