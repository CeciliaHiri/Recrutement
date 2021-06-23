<?php
namespace App;

use controllers\ClientController as ClientController;

class Dispatcher
{
    //le ? permet de rendre la variable nullable
    private ?string $page=null;
    private ?string $id=null;
    private ?string $action=null;

    public function __construct()
    {
        if (isset($_GET['page'])) {
            $this->page = $_GET['page'];
        }

        if (isset($_GET['id'])) {
            $this->id = $_GET['id'];
        }

        if (isset($_GET['action'])) {
            $this->action = $_GET['action'];
        }
    }

    public function Dispatch()
    {
        new ClientController($this->page, $this->action, $this->id);
    }
}
