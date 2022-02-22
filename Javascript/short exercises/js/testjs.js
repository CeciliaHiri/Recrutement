console.log("Hello");
window.alert("Hello world");
document.write("hello, je suis ici"); // se trouve dans le body

console.log(window.document.body);
window.document.body.innerHTML = "J'écris ce que je veux dans le <strong>body</strong>";

//Un script javascript est une série d'instructions (pouvant être des déclarations)

// ex d'une déclaration, séparé par un ; x est un identifiant 
let x,y,z;

//ex d'affectation
x=32;//assignation d'un littéral (qui ne pourra pas bouger dans la valeur)
y=x; //assignation d'une variable pouvant fluctuer 

var lastname, lastName; //il y a une instruction et 2 déclarations, CamelCase = majuscule sur le 2ème mot pour les classes
//une variable stocke une valeur 