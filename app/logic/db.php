<?php 

$driver = 'mysql';
$host = 'localhost';
//-----------------------------mydaily
$db_name = 'tigva203_dynweb'; //имя бд
$db_user = 'tigva203_admin'; //имя поль бд
$db_pass = 'Monika18++'; //пароль бд
//----------------------------local
// $db_name = 'dynweb'; //имя бд
// $db_user = 'admin'; //имя поль бд
// $db_pass = '123'; //пароль бд
//-------------------------------
$charset = 'utf8';
$option = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try {
$pdo = new 
PDO("$driver:host=$host;dbname=$db_name;charset=$charset",$db_user,$db_pass,$option);
} catch (Exception $e) {
	echo 'err';
}