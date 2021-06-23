<?php

abstract class Compte
{
    protected string $name;
    protected string $surname;
    protected float $solde;

    protected function __construct(string $name, string $surname, float $solde)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->solde = $solde;
    }

    abstract protected function retirerArgent(float $value):void;
    abstract protected function setSolde(float $value): bool;

    protected function deposerArgent(float $value):string
    {
        if (is_numeric($value)) {
            $this->solde += (float)$value;
            return 'Le solde de votre compte est désormais de '.$this->solde.'€'.PHP_EOL;
        }
        return 'Merci de fournir un nombre'.PHP_EOL;
    }

    public function getName():string
    {
        return 'Votre Nom est '.$this->name.PHP_EOL;
    }

    public function getSurname():string
    {
        return 'Votre Prénom est '.$this->surname.PHP_EOL;
    }

    public function getSolde(): string
    {
        return 'Votre compte présente un solde de '.$this->solde.'€'.PHP_EOL;
    }

    public function setName(string $value):void
    {
        $this->name = $value;
    }

    public function setSurname(string $value):void
    {
        $this->surname = $value;
    }

    public function __toString(): string
    {
        return "Bonjour $this->name $this->surname, le solde de votre compte est de $this->solde €.".PHP_EOL;
    }
}
