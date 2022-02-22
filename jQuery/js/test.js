//Permet d'attendre que le DOM soit chargé 
//Cloisonne le code que l'on va écrire (pas de variables globales)
//On s'assure que l'alias $ va fonctionner :en fait jQuery s'écrit aussi $
//On voit que jQuery est une fonction ()
// Elle attend en paramètre, une fonction anonyme(callback)
const jquery = require("../jquery");

jQuery(function($){
    //récupération d'éléments du DOM
    $('.h1').hide(3000).show(2000);
    //création d'élément DOM
    const h2= $("<h2>Titre de niveau 2</h2><p>C'est chouette jQuery</p>");
    //insertion h2 en insertion dans le fils de body
    h2.appendTo("body");


    //autre façon de créer un DOM
    $("<p></p>",{
        text: "Hello",
        id:"p1",
        class:"p"
    }).appendTo("body");


    //ajouter un fichier entre deux éléments
    // $( "h1" ).first().css( "background-color" . red);
    $( "h1" ).first().after( "<p>Test Yvan</p>");

    //utilisation des getter et setter

    const text_first_h1 = $('h1').first().text();
    console.log(`texte du premier h1: ${text_first_h1}`);

    //setter
    $('h1').last().text("Hello");
});