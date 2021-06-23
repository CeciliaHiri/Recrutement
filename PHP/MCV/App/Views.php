<?php
namespace App;

use App\Db as Db;

class Views
{
    private string $template;
    private string $head;
    private string $header;
    private string $footer;
    private string $content;
    private array $vars;

    public function __construct()
    {
        $this->template =dirname(__FILE__).'/../views/template/';
    }

    public function getHead()
    {
        return $this->template.'head.php';
    }

    public function getHeader()
    {
        return $this->template.'header.php';
    }

    public function getFooter()
    {
        return $this->template.'footer.php';
    }

    public function setContent($content)
    {
        $this->content = (dirname(__FILE__).'/../views/'.$content);
    }

    public function getContent()
    {
        return $this->content;
    }

    public function setVar($nomvar, $var)
    {
        $this->vars[$nomvar] = $var;
    }

    public function getVar()
    {
        return $this->vars;
    }

    public function render()
    {
        echo extract($this->vars);
        ob_start();
        require($this->getHead());
        require($this->getHeader());
        require($this->getContent());
        require($this->getFooter());
        return ob_get_clean();
    }
}
