"use strict";

//constructeur cercle

function Cercle(rayon,name) {
    this.rayon=rayon;
    this.name=name;
}

Cercle.prototype.pi = 3.14;
Cercle.prototype.air = function () {
    
    console.log("Aire du cercle est" + this.name + " : " + (this.pi * (this.rayon * this.rayon)));
}

//instance des cercles 
const petit_cercle=new Cercle(2, "petit_cercle");
const grand_cercle=new Cercle (4, "grand_cercle");

//appel de la méthode
petit_cercle.air();
grand_cercle.air();

