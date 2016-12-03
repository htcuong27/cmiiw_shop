<?php require 'connection.php'; ?>
<?php
session_start();
?>

<?php 
	if (isset($_POST["btn_submit"])) {
		$username = $_POST["username"];
		$password = $_POST["password"];
		if ($username == "" || $password =="") {
			echo "Tên tài khoản hoặc Mật khẩu bạn không được để trống!";
		}
		else{
			$sql = "SELECT * FROM members WHERE UserName = '$username' AND PassWord = '$password' ";
			$result = mysql_query($sql);
			$count = mysql_num_rows($result);
			if ($count == 1){
				$_SESSION['username'] = $username;
				header("location:loginsuc.php");
            }
			else{
                echo "Tên tài khoản hoặc Mật khẩu không đúng !";
			}
		}
	}
?>

<?php require 'shared/header.php'; ?>

		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form"><!--login form-->
						<h2>Đăng nhập</h2>
						<form method="POST" action="login.php">
							<input type="text" name="username" placeholder="Tên tài khoản CMIIW Shop" />
							<input type="password" name="password" placeholder="Mật khẩu (6-18 ký tự)" />
							<span>
								<input type="checkbox" class="checkbox">
								Nhớ thông tin đăng nhập
							</span>
							<button name="btn_submit" "btntype="submit" class="btn btn-default">Đăng Nhập</button>
						</form>
					</div><!--/login form-->
				</div>
				<div class="col-sm-1">
					<h2 class="or">Hoặc</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form"><!--sign up form-->
						<h2>Đăng ký</h2>
						<form action="#">
							<input type="text" placeholder="Tên tài khoản CMIIW Shop"/>
							<input type="email" placeholder="Mật khẩu (6-18 ký tự)"/>
							<button name="btn_submit" type="submit" class="btn btn-default">Đăng ký</button>
						</form>
					</div><!--/sign up form-->
				</div>
			</div>
		</div>

<?php require 'shared/footer.php'; ?>

