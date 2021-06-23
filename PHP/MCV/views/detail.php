<?php
echo '<h1> Client: '.$client['nom'].' '.$client['prenom'].'</h1>';

echo '<h2>Comptes courants</h2>';
foreach ($compteCourants as $key=>$value) {
    if ($key===0) {
        ?>
            <table class="table">
                <thead>
                    <th scope='col'>Solde</th>
                    <th scope='col'>Autorisation de découvert</th>
                </thead>
                <tbody>
                <?php
    }
    echo "<tr>
        <td>".$value['solde']."
        </td>
        <td>".$value['decouvert_autorise']."
        </td>
    </tr>";
}
echo '</tbody></table>';

echo '<h2>Comptes épargnes</h2>';
foreach ($compteEpargnes as $key=>$value) {
    if ($key===0) {
        ?>
            <table class="table">
                <thead>
                    <th scope='col'>Solde</th>
                    <th scope='col'>Taux d'intérêt</th>
                </thead>
                <tbody>
                <?php
    }
    echo "<tr>
        <td>".$value['solde']."
        </td>
        <td>".$value['taux_interet']."
        </td>
    </tr>";
}
echo '</tbody></table>';

?>
<a href='index.php'>Retour tableau clients</a>
<?php
            echo '<h1>'.$_SERVER['PHP_SELF'].'</h1>';