/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/
// yen a plusieurs syntaxe 

const athelete = {
  name: "Usain Bolt",
  age: 36,
  // méthode
  run: function () {
    console.log("Je cours très vite !");
    console.log(this.name); // this : fait reference au contexte appelant
  },
  swim: () => {
    console.log("Je nage très vite !");
    conole.log(this.name); // this : fait reference au contexte englobant ; window dans ce cas, donc undefined
    
  },
  jump() {
    console.log("Je saute très haut !");
  },
};

