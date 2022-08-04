<?php

echo '<pre>';

$mas = ['balta', 9 => 'juoda', 'raudona'];

// $mas = array('balta', 9 => 'juoda', 'raudona');

$mas['super'] = 'Super Katė';

$mas[] = 'Katė';

$mas[7] = 'Šunius';

$mas['0.87'] = 'Dramblys';

$mas[] = 'Katė';

echo count($mas);

echo '<br>';



echo '<br>';

// for ($i = 0; $i < 5; $i++) {
//     echo "Dabar: $i \n";
// }

// foreach (range(1, 5) as $val) {
//     echo "Dabar: $val \n";
// }

$colors = ['red', 'green', 'blue', 'yellow'];


foreach ($colors as &$value) {}

// unset($value);

foreach ($colors as $value) {}

print_r($colors);
