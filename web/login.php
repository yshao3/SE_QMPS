<?php 
	# submit the data which the users use to log in

	# if either of the name and password passed, display an error message and exit the page
    if(!isset($_POST["name"])|| !isset($_POST["password"])){
    	header("Location: start.php");
        die("error");
    }

    # get the name and password the user typed and also get the time
	$name = $_POST["name"];
	$password = $_POST["password"];

	# check if this is a existed user
	$user_exist= 0;
	foreach(file("users.txt", FILE_IGNORE_NEW_LINES) as $user) {
		$info = explode(":", $user);
		list($username, $userpassword) = $info;

		#if the name is existed and password is correct, send to log in page
		if($name == $username){
			$user_exist++;
			if($password == $userpassword){
				login($name, $password);
			}
		}
	}

   	# if the user do not exists, create a new user account if the user's input is validate
	# and store the information about the new user in the file
	# If the input is invalid, redirect the user back to start
	if(($user_exist == 0 ) && preg_match("/^[a-z][\da-z]{2,7}$/", $name) 
		&& preg_match("/^\d.{4,10}[^\da-z]$/", $password)){
		#create a new user account
		$newUser = $name . ":" . $password ."\n";
		file_put_contents("users.txt", $newUser , FILE_APPEND);
		login($name, $password);
	}else{
		header("Location: start.php");
	}

	# remember the login and go to data page
	function login($name, $password){
		session_start();
		$_SESSION["name"] = $name;
		$_SESSION["password"] = $password;

		header("Location: data.php");
		die();		
	}
?>