/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/

const title = document.querySelector("h1");
title.addEventListener("click", function () {
  title.style.color = "red";
  title.textContent = "Le text a ete modifié";
  }); // la on ne peux pas utiliseer le removeeventlistenr

function handleClick() {
    title.style.color = "blue";
    title.textContent = "Le text a ete modifié";
}

const title2 = document.querySelector("h2");
title2.addEventListener("click", handleClick);

title2.removeEventListener("click", handleClick); // la on peut utiliser le removeeventlistenr


window.addEventListener("load", handleLoad);

function handleLoad() {
    console.log("La page est chargée");
}
