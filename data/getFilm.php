<?php

$page = $_GET['page'];
$start = $_GET['start'];
$limit = $_GET['limit'];

$file = json_decode(file_get_contents('film.json'));
$json = (object) [
        "success" => true,
        "results" => count($file->rows),
        "rows"    => array_slice(
            $file->rows,
            $start,
            $limit
        )
];

echo json_encode($json);
