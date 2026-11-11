/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres.
    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets secondaires en dehors de son bloc.

*/

function add(a, b) {
    return a + b;
}

// si on utilise une variable globale dans la fonction, elle n'est plus pure
let c = 10;
function addWithGlobal(a, b) {
    return a + b + c;
}
