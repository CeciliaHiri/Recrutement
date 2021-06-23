<?php
namespace model;

use app\Db as Db;
use app\Model as Model;

class Client extends Model
{
    private ?int $id;
    private ?string $nom;
    private ?string $prenom;

    public function __construct($nom=null, $prenom=null, $id=null)
    {
        $this->nom = $nom;
        $this->prenom =$prenom;
        $this->id= $id;
        parent::$table = 'psclient';
        parent::$connection = Db::getInstance();
    }

    /**
     * Get the value of id
     *
     *
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of nom
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @return  self
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get the value of prenom
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set the value of prenom
     *
     * @return  self
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }
}
