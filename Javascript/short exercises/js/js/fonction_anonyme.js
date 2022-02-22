// Création d'une fonction anonyme
(function(){
    let i="12"; //variable dans la fonction
    console.log('i:',i);
})();
//les parenthèses permettent d'appeler la fonction immédiatement 

(function(){
    let i="1";
    console.log('i:',i);
})();
//Fonctions fléchées(arrow)
const arrowhello = text => "hello fléché";
   

function hello(text){
    return "hello";
}

console.log(arrowhello()); //demande d'afficher la fonction avec les ()