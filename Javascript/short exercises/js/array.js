var cars = ["Saab", "Volvo", "BMW"];// tableau à index

//taille du tableau, 

console.log(cars.length);

//l'index commence à 0
console.log(cars[0]);

//parcours d'un tableua avec la boucle for
for (let index = 0; index < cars.length; index++) {
   console.log = cars[index];
    
}

//la boucle for of

for (car of cars) {
    console.log(car);
}

//boucle foreach
cars.forEach(function(car) {
    console.log(car);
});

//trier un tableau
cars.sort();

//transformer un tableau 
const cars_li = cars.map(function (car) {
    return `<li>${car}</li>`;
    
});

const number = [4,8,3,7]; 

let minimum=number.reduce(function (accumulator,currentValue) {
    if (accumulator<currentValue) {return accumulator;}
    else {return currentValue;}
});
    console.log (`minimum : ${minimum}`);

//ajoute un élément à un tableau
//attention! push renvoie la taille du tableau
console.log(number.push(87));//affiche 5
console.log(number.push);
