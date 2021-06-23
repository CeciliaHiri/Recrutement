<?php
namespace model;

use app\Db as Db;
use app\Model as Model;

class CompteEpargne extends Model
{
    private ?int $id;
    private ?float $tauxInteret;
    private ?float $solde;

    public function __construct($id=null, $solde=null, $tauxInteret=null)
    {
        $this->id = $id;
        $this->tauxInteret = $tauxInteret;
        $this->solde = $solde;
        parent::$table = 'compteepargne';
        parent::$connection = Db::getInstance();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getSolde():string
    {
        return $this->solde;
    }

    public function getTauxInteret():string
    {
        return $this->tauxInteret.'%';
    }

    public function setSolde(float $value)
    {
        if (($value)>0) {
            $this->solde = $value;
            return $this;
        }
        return false;
    }

    public function setTauxInteret(float $value)
    {
        $this->tauxInteret = $value;
        return $this;
    }

    public function __toString(): string
    {
        return "Bonjour $this->name $this->surname, le solde de votre compte est de $this->solde €. Votre taux d'intérêt annuel est de $this->tauxInteret %".PHP_EOL;
    }
}
