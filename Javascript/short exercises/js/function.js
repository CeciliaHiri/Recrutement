//Déclaration d'une fonction

function test(firstname){
 return 'hello ${firstname}';
}
//appel de la fonction, retour de la fonction test
let msg=test("Bob");
//ça stock le résultat "hello bob" dans la variable msg

// si let msg=test; on affecte la fonction à msg

console.log (msg);