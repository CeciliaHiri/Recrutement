//syntaxe des objets littéraux
// les objets en js sont des tableaux associatifs 
//tableau index ou associatif = valeur 

const car = {
            name:"punto",
            type:"Fiat", 
            model:"500", 
            color:"white",

//start est une propriété de type function, c'est donc une méthode
//dans une méthode, this représente l'instance de l'objet qui appelle la méthode

start: function(){
    console.log('car dans start:', this);
    console.log(this.name + 'fait vroum vroum');
    }
}
console.log ('car :', car);
console.log ('car :', car.type);
console.log ('car :', ["type"]);// même ligne que précédente sauf que la synthaxe est différente

//une méthode s'appelle depuis un objet
car.start();
car["start"]();