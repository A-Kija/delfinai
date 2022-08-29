<?php

namespace App\Controllers;

use App\App;

class HomeController {

    public function home()
    {
        $title = 'HOME';

        return App::view('home', ['title' => $title]);
    }
    
}