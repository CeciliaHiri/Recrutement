// app dans le constructor, on récupère juste une référence

import DomUtils from "./../utils/DomUtils.js";
export default class Term extends DomUtils {
  /**
   * la class Term permet de créer des termes que l'on affichera
   * dans le DOM en utilisant la référence de app (instance de l'application) pour avoir accès
   * à ses éléments du dom (header, main ...)
   * @param {number} id
   * @param {string} name
   * @param {objet} app
   */
  constructor(id, name, app){
    super();
    // Propriétés
    this.id = id;
    this.name = name;

    // On récupère une référence à l'instance de l'application (app)
    this.app = app;

    // Création et récupération des élements de base du dom dans l'objet this.domElements
    // this.domElements est une propriété de type objet
    this.domElement = this.render();

    // Gestion des événements
    this.manageEvents();
  }

  manageEvents() {

    // Gestion du click sur un bouton de terme (rubrique)
    this.domElement.onclick = () => {
      console.log('click sur un terme');

      // Appel de la fonction qui permet d'aller chercher les cartes
      this.app.fd.getCards(this.app.user, this.app.token, this.id)
      .then((data) => {
        console.log('Cards dans manageEvents de Term : ', data);
      })
      .catch((error) => {
        console.error('Erreur attrapée dans manageEvents de Term :' + error.message);
      });
    }


  }

  render() {
    const term_button = this.createCompleteDomElement(
      "button",
      this.name,
      [
        {
          name: "class",
          value: "btn btn-secondary m-3"
        }
      ],
      this.app.domElements.header
    );

    return term_button;
  }

  class Column{

    constructor(section,id_Card){
      this.section=section;
      this.id_Card=id_Card;
    }

    
  class Card{
   
    constructor(column,explication,id,question,reponse){
      super();
      this.column=column;
      this.explication=explication;
      this.question=question;
      this.reponse=reponse;
     
      this.id_Card=id_Card;
      this.app = app;

      this.domElement = this.render();


    }

  }




  




// // correction app dans le constructor, on récupère juste une référence

// import DomUtils from "./../utils/DomUtils.js";
// export default class Term extends DomUtils {
//   /**
//    * la class Term permet de créer des termes que l'on affichera
//    * dans le DOM en utilisant la référence de app (instance de l'application) pour avoir accès
//    * à ses éléments du dom (header, main ...)
//    * @param {number} id 
//    * @param {string} name 
//    * @param {objet} app 
//    */
//   constructor(id, name, app){
//     super();
//     // Propriétés
//     this.id = id;
//     this.name = name;

//     // On récupère une référence à l'instance de l'application (app)
//     this.app = app;

//     // Création et récupération des élements de base du dom dans l'objet this.domElements
//     // this.domElements est une propriété de type objet
//     this.domElement = this.render();

//     // Gestion des événements
//     this.manageEvents();
//   }
  
//   manageEvents() {

//     // Gestion du click sur un bouton de terme (rubrique)
//     this.domElement.onclick = () => {
//       console.log('click sur un terme');

//       // Appel de la fonction qui permet d'aller chercher les cartes
//       this.app.fd.getCards(this.app.user, this.app.token, this.id)
//       .then((data) => {
//         console.log('Cards dans manageEvents de Term : ', data);
//       })
//       .catch((error) => {
//         console.error('Erreur attrapée dans manageEvents de Term :' + error.message);
//       });
//     }
//   }

//   render() {
//     const term_button = this.createCompleteDomElement(
//       "button",
//       this.name,
//       [
//         {
//           name: "class",
//           value: "btn btn-secondary m-3"
//         }
//       ],
//       this.app.domElements.header
//     );

//     return term_button;
//   }
// }