"use strict";

function createCompleteDomElement(tag_name, text, class_name, parent_element) {
    const element = document.createElement(tag_name); // je créé un élément du DOM dont je stocke la réf dans la variable button
    element.textContent = text;
    element.setAttribute("class", class_name); 
    parent_element.appendChild(element);
    return element;
}

const button = createCompleteDomElement("button", "je suis un élément bouton DOM","btn", document.body);







//Exo 2
// "use strict";

// function createElement(tag_name, text, class_name, parent_child) {
//     const button = document.createElement("button");
//     button.textContent = "mon bouton";
//     document.body.appendChild(button);
//     button.setAttribute("class", class_name); 

//     return button;
// }

// const button = createElement("button", "mon bouton","warning button", document.body);

// Création (set) d'un élément du DOM





//exo 1
//"use strict";
// /**
//  * 
//  * @param {string} tag_name 
//  * @param {string} text 
//  * @param {string} class_name 
//  * @param {DOM element} parent_child 
//  * @returns {DOM element} element
//  */

// function createElement(tag_name, text, class_name, parent_child) {
// const element = document.createElement(tag_name);
// element.textContent = text;
// element.setAttribute("class", class_name); 
// parent_child.appendChild(element);

// return element;
// }

// Récupération (set) d'éléments du DOM
//const h2 = createElement("h2", "Titre de niveau 2","warning", document.body);
// = console.log('h2:',h2);

// Exercice initial
// const h2 = document.createElement("h2");
// h2.textContent = "Titre de niveau 2";
// document.body.appendChild(h2);
// h2.setAttribute("class", "warning"); 


//console.log(DOM_creation);



