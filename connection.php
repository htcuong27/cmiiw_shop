<?php
$host="localhost"; 
$username="root"; 
$password=""; 
$db_name="cmiiw"; 
 
mysql_connect("$host", "$username", "$password")or die("Không thể kết nối");
mysql_select_db("$db_name")or die("cannot select DB");
?>
