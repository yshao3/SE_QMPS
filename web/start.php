<?php
	# the initial page that allow the user enter username and password and log in or register
	# and also display the last time that user logged in

    session_start();     
    # redirects to the todolist page if the user already logged in
	if(isset($_SESSION["name"]) && isset($_SESSION["password"])) {
		header("Location: data.php");
		die();
	}

	include("common.php");
	#display the head title of the page
	top();

?>
		<div id="main">

			<form id="loginform" action="login.php" method="post">
				<div><strong>User Name: </strong>
				<input name="name" type="text" size="8" autofocus="autofocus" /> 
					</div>
				<div><strong>Password: </strong>
				<input name="password" type="password" size="8" /> 
					</div>
				<div><input type="submit" value="Log in" /></div>
			</form>

		</div>

<?php
    #display the bottom of the page 
	footer();
?>
