<?php

	session_start(); 

	#send user to the start page if user have not logged in     
    if(!isset($_SESSION["name"]) || !isset($_SESSION["password"])) {
		header("Location: start.php");
		die();
	}

	include("common.php");
	#display the head title of the page
	top();

	# changed to session
	$name = $_SESSION["name"];
?>
	<div class="content">
		<div class="main">
			<h3>Welcome to QMPS data system</h3>
			<a href="logout.php"><strong>Log Out</strong></a>
		</div>


		<div class="sidenav">
			<a href="#cleanliness">Teat Cleanliness</a>
			<a href="#unitAlignment">Unit Alignment</a>
			<a href="#udderHygiene">Udder hygiene</a>
			<a href="#stripYields">Strip Yields</a>
			<a href="#postMilking">Post Milking Treat</a>
			<a href="#lactoCoder">LactoCoder Analysis</a>
		</div>
	</div>


<?php
    #display the bottom of the page 
	footer();
?>
