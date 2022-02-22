// Permet d'attendre que le dom soit chargé (pas besoin de defer)
// Cloisonne le code que l'on va écrire (pas de variables globales)
// On s'assure que l'alias $ va fonctionner : en fait jQuery s'écrit aussi $
// On voit que jquery est une fonction ()
// Elle attend en paramètre une fonction anonyme (callback) 
jQuery(function($){
  
    // Premier événement à gérer : la soumission du formulaire pour éviter 
    // le rechargement de la page
    $("form").on("submit",function(e){
      e.preventDefault();
    });
  
    // Quand on entre une valeur dans l'input euro, on donne la conversion immédiatement das l'input franc
     $('#euro').on("input", function(e){
      // On modifie la valeur de l'input franc en fonction de la valeur de l'input euro
      // en utilisant la méthode val
      $('#franc').val($('#euro').val() * 1.1);
     });
  
     $('#franc').on("input", function(e){
      // On modifie la valeur de l'input euro  en fonction de la valeur de l'input franc
      // en utilisant la méthode val
      $('#euro').val($('#franc').val() / 1.1);
     });
  
     // Récupération de la couleur des labels
     const color_label = $("label").css("color");
     console.log(`couleur des labels : `, color_label);

     //changement de la couleur
     $("label").css("color","green");

     //récupération de la police des labels 
     const police_label = $("label").css("font-family");
     console.log(`police des labels : `,police_label);
     
      //changement de la police
      $("label").css("font-family","Arial");

      //changement de la taille de police 
      $("label").css("font-size","24px");
      //changement de la couleur de l'input
      $("input").css("border-color","blue");

     $("h1.last").css("color","pink");
  });