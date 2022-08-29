<?php

namespace App\Controllers;

use App\App;

class HomeController {

    public function home()
    {
        $title = 'HOME';
        $welcome = 'Hello from fancy zoo!';

        return App::view('home', [
            'title' => $title,
            'welcome' => $welcome
        ]);
    }
    
}