<?php
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