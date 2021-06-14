 <?php
/*
Template Name: test
*/
get_header();

?>
<main id="main" class="site-main" role="main">
 
    <div class='row'>
    <h2>Nous contacter</h2>
      <div id="contact"> 
      
        <?php
        global $wpdb;
        // dynamic_sidebar('hc-colab');
        // Connexion à la BDD https://developer.wordpress.org/reference/classes/wpdb/#examples-6
          if (isset($_POST["submit"])){
            
            if(isset($_FILES['pdf']))
            { 
                 $dossier = 'upload/2021/'; // chemin où sera mis le fichier
                 $fichier = basename($_FILES['pdf']['name']); // récupère le nom du fichier
                 if(move_uploaded_file($_FILES['pdf']['tmp_name'], $dossier . $fichier)) //Si la fonction renvoie TRUE, c'est que ça a fonctionné...
                 {
                      echo 'Upload effectué avec succès !';
                 }
                 else //Sinon (la fonction renvoie FALSE).
                 {
                      echo "Echec de l'upload !";
                 }
            }   

            $wpdb->insert(
              'sp_contact',
              array(
                'statut' => $_POST['statutchoice'],
                'nom' => $_POST['contactName'],
                'prenom' => $_POST['contactFirstname'],
                'email' => $_POST['email'],
                'telephone' => $_POST['phoneNumber'],
                'adresse' => $_POST['address'],
                'metier' => $_POST['job'],
                'raison_sociale' => $_POST['legalEntity'],
                'projet' => $_POST['project']
              
              ),
              array(
                '%s',
                '%s',
                '%s',
                '%s',
                '%d',
                '%s',
                '%s',
                '%s',
                '%s'
              ),
            );
        ?>
        <p>Le formulaire a bien été envoyé. Nous vous remercions de nous avoir contacté et nous reviendrons très prochainement avec une réponse.</p>


        <?php  
        
       
      }
    
          // vérification de l'envoi des données après avoir submitté les données du formulaire
          var_dump($_POST);
          var_dump($_FILES);

        ?>
        
          
  
<section class="col-6">
    <div class="pl-4">
        <h3>Formulaire de contact : </h3>
        <form enctype="multipart/form-data" action="<?php $_SERVER['PHP_SELF']?>" id="contact" method="post">
          <div>
            <input type="radio" id="entreprise" name="statutchoice" value="entreprise ou collectivitee <?php if(isset($_POST['contactName']) === '')?>">
            <label for="entreprise">Entreprise ou Collectivitée</label>
            <input type="radio" id="syndics" name="statutchoice" value="syndicat <?php if(isset($_POST['contactName']) === '')?>">
            <label for="syndics">Syndical de copropriété</label>
            <input type="radio" id="particulier" name="statutchoice" value="particulier <?php if(isset($_POST['contactName']) === '')?>">
            <label for="particulier">Particulier</label>
          </div>
          <label for="lastname">Nom<strong class="text-danger">*</strong> :</label>
          <input type="text" name='contactName' id="lastname" placeholder="Dylan" required value="<?php if(isset($_POST['contactName']) === '')?>">
        </fieldset>
        <fieldset class="mt-3">
          <label for="firstname">Prenom<strong class="text-danger">*</strong> :</label>
          <input type="text" name ='contactFirstname' id="firstname" placeholder="Bob" required value="<?php if(isset($_POST['contactFirstname']) === '')?>">
        </fieldset>
        <fieldset class="mt-3">
          <label for="quality">Votre métier<strong class="text-danger">*</strong> :</label>
          <input type="text" id="job" name='job' placeholder="Commerciale" required value="<?php if(isset($_POST['job']) === '')?>">
        </fieldset>
        <fieldset class="mt-3">
          <label for="company">Raison sociale<strong class="text-danger">*</strong> :</label>
          <input type="text" name='legalEntity' id="company" placeholder="SunPower" required value="<?php if(isset($_POST['legalEntity']) === '')?>">
        </fieldset>
        <fieldset class="mt-3">
          <fieldset class="mt-3">
            <label for="address">Votre adresse postale<strong class="text-danger">*</strong> :</label>
            <input type="text" name='address' id="address" placeholder="20 rue des champs-fleury 34000 Montpellier" required value="<?php if(isset($_POST['address']) === '')?>">
          </fieldset>
          <fieldset class="mt-3">
            <label for="number">Votre numéro de téléphone<strong class="text-danger">*</strong> :</label>
            <input type="number" name='phoneNumber' id="number" placeholder="0678200000" required value="<?php if(isset($_POST['phoneNumber']) === '')?>">
          </fieldset>
          <fieldset class="mt-3">
            <label for="inputMail">E-mail<strong class="text-danger">*</strong> :</label>
            <input type="email" name='email' id="inputMail" placeholder="email@domaine.fr" required value="<?php if(isset($_POST['email']) === '')?>">
          </fieldset>
          <fieldset class="mt-3 d-flex">
            <label for="project">Parler nous de votre projet<strong class="text-danger">*</strong> :</label>
            <textarea name='project' id="project" cols="30" rows="10" required placeholder="Votre message"></textarea><?php if(isset($_POST['project']) === '')?>
          </fieldset>
          <fieldset>
            <label for="pdf">Télécharger votre fichier au format PDF</label>
            <!-- On limite le fichier à 100Ko -->
            <input type="hidden" name="MAX_FILE_SIZE" value="100000">
            <input type="file" name='pdf' id="pdf" accept=".pdf">
         
          </fieldset>
          
          <div>
            <input type="submit" name='submit' class="btn btn-primary mb-4 mt-3" value='Valider'>
        </form>      
    </div>
</section>



        
    </div>

</main>


<?php
get_footer();
?>
