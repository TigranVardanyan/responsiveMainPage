<?php 

require_once('db.php');

$txt = $_GET['myText'];
$rand = pow(rand(0 , 7) , 2)+12;
$sql = "insert into coltext (text , fsize) values (:txt , $rand)";
$stmt = $pdo->prepare($sql);

$params = [":txt" => $txt];


$stmt->execute($params);

header("location: ../reviews.php");