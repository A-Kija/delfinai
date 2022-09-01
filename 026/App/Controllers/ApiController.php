<?php

namespace App\Controllers;

use App\App;

class ApiController {

    public function show()
    {
        
        return App::view('api_form', [
            'title' => 'Select from',
        ]);

    }

    public function doApi()
    {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, 'https://www.distance24.org/route.json?stops=Hamburg|Berlin');
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                $output = curl_exec($ch);
                curl_close($ch);


                var_dump($output);





    }

}