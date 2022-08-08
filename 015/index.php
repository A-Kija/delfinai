<?php
echo '<pre style="color: crimson;">';

$mas = [];

foreach(range(1, 30) as $_) {
    $mas[] = rand(5, 25);
}

// print_r($mas);

$max = $mas[0];
$indexes = [];

foreach($mas as $index => $value) {
    if ($value > $max) {
        $max = $value;
        $indexes = [];
        $indexes[] = $index;
    } else if ($max == $value) {
        $indexes[] = $index;
    }
}

// print_r($max);
// echo "\n";
// print_r($indexes);

$mas2 = [];
foreach(range(1, 200) as $_) {
    $mas2[] = 'ABCD'[rand(0, 3)];
}

// print_r($mas2);

function fun($v = 'bevardi') {
    return "Labukas $v, ka tu? \n";
}


$kibiras = fun('Jonai');

echo ($kibiras);


$kibiras = fun('Teta Zose');

echo ($kibiras);


$kibiras = fun();

echo ($kibiras);


