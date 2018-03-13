<?php
	# ends the user's login session and send back to the start page
	# also send to the start page if the user haven't logged in
    if (!isset($_SESSION["name"])&&!isset($_SESSION["password"])) {
    	header("Location: start.php");
    }

    session_start();
    session_destroy();
    session_regenerate_id(TRUE); 
?>