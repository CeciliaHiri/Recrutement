"use strict";

// fonction constructeur
function User(login,password){ //login et pwd sont des paramètres
    //propirétés de base, this. est l'objet en cours, on  affecte des propriétés 'this'
    this.login=login;
    this.password=password;
    console.log('this:',this); // est l'équivalent de la constant b 

}

//Création d'instance d'objet (un objet parmis les autres) via le mot clé 'New'
const b = new User("bob", "123"); //envoi des arguments et on appelle la fonction

console.log("user b:",b);