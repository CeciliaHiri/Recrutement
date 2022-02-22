//Le scope d'une variable déclarée avec le mot clé var (function scope)
//est globale si elle déclarée en dehors de la function

//Quel est le scope d'une variable déclarée avec le mot clé let ou const(toujours la même valeur)? elles sont bloc scope
//Global si déclarée en dehors d'un bloc de code , si elle est dans le bloc ==>locale

var i=1; // variable globale
test();//appeler la variable
function test(){
    var i=2; // variable locale à la fonction test
    console.log('i :',i);//affiche 22
}
    var i=12; //interdit car on ne peut pas déclarer 2 fois la même variable dans le même scope/contexte
    console.log('i :',i);//affiche 1

// ne pas être réaffectée
const i="hello";
i="joe";

console.log("Hello"+" Bob");//concaténation (même opérateur qui sert à concaténer et additionner)

let a="hello";
let b="Bob";
console.log ("${a} ${b}")//utilisation des backticks

