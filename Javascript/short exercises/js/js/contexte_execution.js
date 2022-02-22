let i = 1;
function a() {
  let j = 2;
  b();
  function b(){
    {
      let k = 3;
    }
    let l = 4;
    console.log(l);
    console.log(k);
  }
}
a();

//contexte d'execution global
//variables: i
//function a()

//contexte d'execution de la fonction a
//variables: j
//function b

//contexte d'execution de la fonction b
//variables: l ( on prend le dernier)
//function : 0


//bloc d'execution de la fonction b
//variables:k
//function : 0
