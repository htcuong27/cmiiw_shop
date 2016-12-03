<?php
session_start();

if (!isset($_SESSION['username'])) {
	 header('Location: login.php');
}
?>
<html>

<head>
<title>CMIIW Shop</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	Chúc mừng bạn có username là <?php echo $_SESSION['username'];  ?> đã đăng nhập thành công !
</body>
</html>