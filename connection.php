<?php
$host="localhost"; // luôn luôn là localhost
$username="root"; // user của mysql
$password=""; // Mysql password
$db_name="cmiiw"; // tên database
 
// kết nối cơ sở dữ liệu
mysql_connect("$host", "$username", "$password")or die("Không thể kết nối");
mysql_select_db("$db_name")or die("cannot select DB");
?>