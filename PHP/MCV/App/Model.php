<?php
namespace App;

use App\Db as Db;

class Model
{
    protected static string $table;
    protected static $connection;

    protected function create()
    {
        return self::$connection->insert($this->table, get_object_vars($this));
    }

    protected function getUnique()
    {
    }

    public function getAll()
    {
        return self::$connection->getAll(self::$table);
    }

    public function getById(string $idAttribute, int $id)
    {
        return self::$connection->getAllById(self::$table, $idAttribute, $id);
    }

    protected function update()
    {
    }

    protected function delete()
    {
    }
}
