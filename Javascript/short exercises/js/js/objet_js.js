"use strict";
//synthaxe des objets littéraux 
Object.prototype.bark()=function() {
    console.log("wof wof");
}
Object.prototype.legs_number=4

//mettre en commun aux 2 toutous paquito+oncho
const toutou={
    name:"Paquito",
    breed:"Levrier Afghan",
    legs_number:4,
    bark:function () {
        console.log("wof wof");
    }
}

console.log(toutou);
paquito.bark();

const poncho={
    name:"Poncho",
    breed:"Espagnol",
    legs_number:4
}

console.log(poncho);
poncho.bark();

console.log('Nb de pattes pour Poncho' + poncho.legs_number);
console.log('Nb de pattes pour Paquito' + paquito.legs_number);