"use strict";
const test=function () {
    return "Hello";
};

//la variable test2 stocke (return) de l'execution de la fonction
// const test2=(function () {
//     return "Hello";
// })();


// function test() {
//     return "Hello";
// }

let result=test();
console.log(result);
console.log(test2);

// const hi = (firstname) =>{
//     return "hi" + firstname;
// };

// ou 
const hi = (firstname,lastname) => "hi" + firstname + " " + lastname;

const r =hi("Bob", "Dylan");
console.log(r);

const h1 = document.getElementById("h1");//this ici est h1
h1.onclick= function(){ 
    console.log(this);
}

const h1 = document.getElementById("h1");//this ici est h1
h1.onclick= () => { //il n'y a pas d'objet de classe ou fonction
    console.log(this);
}

function Robot(){
    this.manageClick = () =>{//this ici est le robot
        console.log(this);
    }
}

const robot = new Robot();
h1.onclick = () => {
    robot.manageClick();
}