<?php
namespace App;
use \PDO as PDO;
use \PDOException as PDOException;

class Db extends PDO
{
    private static $dsn='mysql:dbname=mabanque;host=127.0.0.1';
    private static $username= 'root';
    private static $pwd = '';
    private static $instance = null;

    private function __construct()
    {
        try {
            parent::__construct(self::$dsn, self::$username, self::$pwd);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }

    public static function getInstance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new Db();
        }
        return self::$instance;
    }

    public function getAll(string $table):array
    {
        $query = "select * from $table";
        return $this->query($query)->fetchAll();
    }

    public function getAllById(string $table, string $idAttribute, int $idValue):array
    {
        $query = "select * from $table where $idAttribute=$idValue";
        return $this->query($query)->fetchAll();
    }

    public function insert(string $table, array $data)
    {
        $dataToInsert = " (NULL,'".implode("','", $data)."')";
        $query = "insert into ".$table." values".$dataToInsert;
        return $this->exec($query);
    }

    public function delete(string $table, string $idAttribute, int $idValue):int
    {
        $query = "delete from $table where $idAttribute=$idValue";
        return $this->exec($query);
    }

    public function update(string $table, array $data, string $idAttribute, int $idValue)
    {
        $sqlupdate="update $table set ";
        $count = count($data);
        $i=1;
        foreach ($data as $key=>$value) {
            $sqlupdate.=$key."='".$value."'";
            if ($i<$count) {
                $sqlupdate.=',';
            }
            $i++;
        }
        $sqlupdate.=" where $idAttribute=$idValue";
        return $this->exec($sqlupdate);
    }
}
