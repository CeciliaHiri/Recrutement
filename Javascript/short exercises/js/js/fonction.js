//synthaxe d'une fonction
//texte est un paramètre
/** 
*@param {String} texte
*@return void// ne renvoie rien
*/

function afficheDansLaConsole(texte){
    console.log(texte);
}
//
afficheDansLaConsole("Hello Bob"); //Appel de la fonction avec un argument pour l'executer sinon il ne se passe rien
afficheDansLaConsole("ça va JP?");

/**
 * Fonction qui retourne la somme des 2 paramètres
 * @param {number} a 
 * @param {number} b 
 * @returns sum a+b
 */
function add(a,b){
    return a+b; //prend le paramètre a et b  sa valeur et l'affiche résultat de la fonction, add est l'argument (son nom)
}

add(5,9);
console.log(add(5,9));// affiche 14 dans la console, ou on peut l'écrire

//ici c'est la variable
let sum=add(5,9);
console.log(sum);
