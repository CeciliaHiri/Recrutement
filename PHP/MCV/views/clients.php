<?php
    foreach ($clients as $key=>$value) {
        if ($key===0) {
            ?>
            <table class="table">
                <thead>
                    <th scope='col'>#</th>
                    <th scope='col'>Nom</th>
                    <th scope='col'>Prénom</th>
                    <th scope='col'>Consulter</th>
                </thead>
                <tbody>
                <?php
        }
        echo "<tr><th scope='row'>".$value['id']."</th>";
        echo "<td>".$value['nom']."</td>";
        echo "<td>".$value['prenom']."</td>";
        echo "<td><a href='index.php?page=client&action=detail&id=".$value['id']."'<i class='fa fa-eye'></i></a></td></tr>";
    } ?>
                </tbody>
            </table>
            <?php
            echo '<h1>'.$_SERVER['PHP_SELF'].'</h1>';