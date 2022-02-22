jQuery(function($){
    console.log(`jquery est bien chargé`);

    //Déclaration de la variable qui sera accessible dans tt le script
    let colNumb;

    //stock les infos du parents, carte en cours 
    let editing_card;

    // Gestion du click sur les boutons d'ajout de carte
    $(".column-memo .btn-success").on("click", function(event) {
        colNumb = $(event.target).attr('data-number');
        console.log("Numéro de la colonne : ",colNumb);
    
        $('#form-add-card').modal('show');
    });



    // Gestion du click sur le bouton "enregistrer" pour ajouter une carte
    /*Dès que la valeur change, c'est-à-dire dès qu'une sélection est faite,affiche les valeurs sélectionnées dans #val select*/
    $("#submit-btn-add").on("click", function(){
        console.log(`click sur le bouton de validation du formulaire d'ajout de carte`);
       
        
    // Création de l'élément du dom correspondant à la carte
    //Quelle colonne a été cliquée? 
        createDOMCard();

    // Cacher la modale
        $('#form-add-card').modal('hide');
    });

   // Exercices à rendre pour vendredi 28 mai 2021
   // Faire en sorte que les boutons d'ajout de carte ajoutent bien dans la bonne colonne (parmi les 4)
   // Faire en sorte que chaque carte soit créée avec le contenu de la question et de la réponse provenant du formulaire
   // Ajouter un bouton qui permet de supprimer chaque carte (ainsi que tout le mécanisme qui permet réellement de supprimer la carte)
   // Ajouter un bouton qui permet de modifier chaque carte (ainsi que tout le mécanisme qui permet réellement de modifier la carte) : récupérer les éléments d'id autoincrémentation carte (setteur) et entrer la nouvelle info dans l'input du formulaire

   // Utilisation de la méthode "fetch" pour récupérer les cartes et les afficher dans les bonnes colonnes en cliquant 
   // sur les termes (html, css, )

   // Si tout cela est trop compliqué pour vous, vous pourrez me présenter du code plus simple (vos propres exercices) et je noterai en fonction de la complexité du code et surtout de votre capacité à répondre à mes questions.


/**
 * Création et ajout d'une carte dans le DOM
 */
    function createDOMCard() {
        console.log("Numéro de la colonne dans createDOMCard: ",colNumb);
        let html_card = "";
        html_card += `<article class="mb-4 card bg-secondary p-1 pb-3 text-light">`;
        html_card += `<div class="d-flex">`;
        html_card += `<i class="fas fa-arrow-circle-left h3"></i>`;
        //Il faut remplacer la question et la réponse par l'input qui provient du formulaire contenu dans la modal
        //méthode val
        html_card += `<div class="h4">`; //`<h4 class="pl-2 pr-2"></h4>`;
        html_card += $('#question').val();
        html_card += `<i class="fas fa-arrow-circle-right h3"></i>`;
        html_card += `<div class="ml-0">`;
        html_card += `<h5>Réponse : </h5>`;
        html_card += `<div class="h6">`;
        html_card += $('#answer').val();
        html_card += `</div>`;

        html_card += ` <div class="d-flex pl-2 pr-2 justify-content-between align-items-center">`;
        html_card += `<button id="modify" class="btn btn-primary mr-1">Modifier la carte</button>`;
        html_card += `<button id="remove" class="btn btn-danger">Supprimer la carte</button>`;
        html_card += `<i class="fas fa-cog h3 ml-1"></i>`;
        html_card += `</div>`;
        html_card += `</article>`;
       

        $(html_card).appendTo("#column-memo-" + colNumb);

    
    
    //Gestion du clic pour supprimer une carte 
      $("article #remove").on("click", function(e) {
        const button = $(e.target).text();
        console.log("Button: ",button);
        //utilisation de la méthode parents pour récupérer la carte (article) https://sutterlity.gitbooks.io/apprendre-jquery/content/parcourir_le_dom/les_parents.html
        const card = $(e.target).parents('article');

        //utilisation de la méthode remove pour supprimer la Card
        card.remove();     
   
   
    });

     //Modification de la carte
     $("article #modify").on("click", function(e) {
        console.log("Click sur le bouton modifier la carte", $(this));        
                
        const card = $(e.target).parents('article');
        $('#form-add-card').modal('show');
        //Récupère la valeur de la question et réponse de la carte et réinjection dans l'input
        editing_card = $("#question", card).text();
        $('#question',card).val(editing_card);
        $('#answer',card).val(editing_card);


    });

    //  Gestion du click sur le bouton "modifier" en cours pour ajouter une carte
        $("article #modify").on("click", function() {
        console.log("la carte a été modifiée");
        // Enregistrer les changements d'input dans la carte
        const card = $(e.target).parents('article');
        $('#question', card).text($("#question").val());
        $('#answer', card).text($("#answer").val());

        //Faire disparaitre la modale 
        $('#submit-add-card').modal('hide');
            
     });
    


    }

});
   