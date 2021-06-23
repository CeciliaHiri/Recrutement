<?php
namespace model;

use app\Db as Db;
use app\Model as Model;

class CompteCourant extends Model
{
    private ?int $id;
    private ?float $decouvertAutorise;
    private ?float $solde;

    public function __construct($id=null, $solde=null, $decouvertAutorise=null)
    {
        $this->id= $id;
        $this->decouvertAutorise = $decouvertAutorise;
        $this->solde =$solde;
        parent::$table = 'comptecourant';
        parent::$connection = Db::getInstance();
    }

    public function getId()
    {
        return $this->id;
    }
    
    public function getSolde():float
    {
        return $this->solde;
    }

    public function setSolde(float $value)
    {
        if (($value+$this->decouvertAutorise)>0) {
            $this->solde = $value;
            return $this;
        }
        return false;
    }

    public function getDecouvertAutorise():float
    {
        return $this->decouvertAutorise;
    }

    public function setDecouverAutorise(float $value)
    {
        $this->decouvertAutorise = $value;
        return $this;
    }
}
