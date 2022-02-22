//Méthode avec classe
class Card{
    constructor(question,answer){
    this.question=question;
    this.answer=answer;

}
checkAnswer(){
    console.log('vérifierReponse');
}
}
class JsCard extends Card{
    constructor(question,answer,link){
    super(answer, question);
    
   
//Propriétés
    
    this.link=link;
}

//Méthodes déclarées

testOnJsbin(){
    console.log(this.link + "testerCode via le lien pour tester sur Jsbin");
}

}
//Création d'une instance
const test=new Card("Vérifier la réponse", "bonne réponse");
test.checkAnswer();
console.log(test);

const testjs=new JsCard ("check jslink on jsbin","what is jsbin?","www.jsbin.com" );
testjs.testOnJsbin();
console.log(testjs);
