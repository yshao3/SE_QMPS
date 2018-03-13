<?php
# This is the common page for the repeated part

#display the head title of the pages
	function top(){ ?>
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<title>QMPS</title>
			<link href="cow.css" 
			type="text/css" rel="stylesheet" />
			<link href="cow.css" type="text/css" rel="stylesheet" />
			<link href="favicon.ico" 
			type="image/ico" rel="shortcut icon" />
		</head>

		<body>
			<div class="headfoot">
				<h1>
					<img src="logo.gif" 
					alt="logo" />
					Quality Milk <br/>
					Production Services
				</h1>
			</div>
<?php
	}
    #display the bottom of the page 
	function footer(){ ?>
		<div class="headfoot">
		© 2018 Cornell University College of Veterinary Medicine<br/>
		Ithaca, New York 14853-6401
		</div>
	</body>
</html>
<?php
}
?>