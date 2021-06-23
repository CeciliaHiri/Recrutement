<?php
namespace controllers;

use App\Db as Db;
use Model\Client as Client;
use app\Views as Views;
use Model\CompteEpargne as CompteEpargne;
use Model\CompteCourant as CompteCourant;

class ClientController
{
    private ?int $id;

    public function __construct($page='client', $action='index', $id=null)
    {
        if (!is_null($id)) {
            $this->id = (int)$id;
        }

        switch ($action) {
            case 'index':
                $this->index();
                break;
            case 'detail':
                $this->detail();
                break;
            default:
                $this->index();
                break;
        }
    }

    public function index()
    {
        $client = new Client();
        $clients = $client->getAll();
        $view = new Views();
        $view->setVar('clients', $clients);
        $view->setVar('title', 'Bienvenue à la banque virtuelle');
        $view->setContent('clients.php');
        echo $view->render();
    }

    public function detail()
    {
        $client = new Client();
        $infoClient = $client->getById('id', $this->id)[0];
        $compteEpargne = new CompteEpargne();
        $comptesEpargnes = $compteEpargne->getById('client_id', $infoClient['id']);
        $compteCourant = new CompteCourant();
        $comptesCourants = $compteCourant->getById('client_id', $infoClient['id']);
        $view = new Views();
        $view->setVar('client', $infoClient);
        $view->setVar('compteEpargnes', $comptesEpargnes);
        $view->setVar('compteCourants', $comptesCourants);
        $view->setVar('title', 'tu ferais mieux de changer de banque');
        $view->setContent('detail.php');
        echo $view->render();
    }
}
