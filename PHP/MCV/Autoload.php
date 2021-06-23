<?php

class Autoload
{
    public static function register()
    {
        spl_autoload_register([
        __CLASS__,
        'autoloader'
    ]);
    }

    public static function autoloader($class)
    {
        $class = str_replace('\\', '/', $class);
        if (file_exists(__DIR__ . '/' . __NAMESPACE__.$class . '.php')) {
            require __DIR__ . '/' . $class . '.php';
        }
    }
}
