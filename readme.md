# Mobile App
## Development Environment
Per the request of the client, we use Ionic 3 framework to develop the hybrid mobile app. 

	## Running locally
	* ionic cordova plugin add cordova-sqlite-plugin
        ```
	npm install --save @ionic-native/sqlite
        
	```
	* npm install
        
	```
	npm install
        
	```
	* add new platform
        
	```
	cordova platform add ios
        
	```

	## Run project in ios simulator
	```
	ionic cordova emulate ios -c --emulator
	```
	```
	ionic cordova emulate ios --livereload
	```
	```
	ionic emulate ios -l -c
	```

	Structure
		1.Plugins installed:
			cordova-plugin-device 2.0.2 "Device"
			cordova-plugin-ionic-webview 1.2.1 "cordova-plugin-ionic-webview"
			cordova-plugin-splashscreen 5.0.2 "Splashscreen"
			cordova-plugin-statusbar 2.4.2 "StatusBar"
			cordova-plugin-whitelist 1.3.3 "Whitelist"
			cordova-sqlite-storage 2.3.1 "Cordova sqlite storage plugin"
			ionic-plugin-keyboard 2.2.1 "Keyboard"
			uk.co.workingedge.cordova.plugin.sqliteporter 1.0.2 "sqlite porter"
		2.Sign in/Sign up: 
			Sign in and sign up  are uthenticated using firebase, a firebase account associated with gmail account is provided. Developers can add and delete user account in firebase.
		3.Forms: 
			-List of Forms: By entering page of list of forms, the user could click on any of the 6 forms to jump to the certain page. In a form the user could fill in the data and either click save button to store the data locally or click back button to pop the current page and go back to the list of forms.
			-Global Structure: We used NavParams Class as a global map structure to store all the necessary data in 6 forms. After the user jumps into either form, the form will initializes the data either from the global or with default value (if the data aren’t stored in global). When the user clicks the back button, all the data in the form will be updated to NavParams before the current page is popped.
			-Data: Users fill in the data of forms in multiple ways: text, decimal keyboard, selection, date scroll, button. We use text field for user to fill in most of the normal form string data, and use decimal keyboard to force the users to fill in numbers in some field to avoid format error. We sometimes use selection buttons and date scrolls (for date field) to help user fill in some complex data easily. Finally, we use buttons in Lactocoder form to help user record timestamps, and automatically calculate the time interval between two timestamps as data to be stored later. This design is similar to the function of a timer.
		4.Local storage:
			-Sqlite Storage: To achieve offline storage, we integrate cordova sqlite plugin for our local storage. All the database functions can be found in the /providers folder. By clicking the save button on any form, the user will call the database functions to store all current data as one row of data into sqlite. 
			One exception is the Lactocoder form, in which we may store up to 3 row of data into sqlite each time, because the user may record the data for up to 3 cow in 1 form. Lactocoder form uses the cow name to test if a cow in 3 cows is valid and should be stored locally, which means the user has to fill in the cow name text field in order to save the corresponding cow data when clicking save button.
			-User Convenience: What’s more, for users’ convenience we also automatically clear some of data in the form so that the users don’t need to manually clear the text field. However, we keep other data (like sections of farm name, date, observer) since the users are unlikely to change these fields in a day of work.
		5.  Submit Data
			-The home page provides a submit all button which calls the POST API to send the data to the backend database. (home.ts)
			-By clicking the button, it triggers the getData() functions to extract the data from the local storage and then call the API to send the validation information as well as the JSON object of the data. 
			-This file also provides a clear information option which helps the user to clear the local storage. This function is to provide the user to option to clear the database. However, we advise the user to use it with cautious. 

2.Web 
3.Back-end

	###Running locally
	-create-DB:
		* npm install
		```
		npm install
		```
		* node create_DB.js
		```
		node create_DB.js
		```
		or
		```
		nodemon create_DB.js
		```
		Structure:
			-config.js: This file contains mysql database information. User could change configration in it to update corresponding mysql database.
			-create_DB.js: This file contains functions to create database and tables
	-back-end:
		* npm install
		```
		npm install
		```
		* start server
		```
		node server.js
		```
		or
		```
		nodemon server.js
		```
		Structure:
			-config.js: This file contains mysql database information. User could change configration in it to update corresponding mysql database.
			-mobileservice.js: This file contains post api functions to insert records to QMPS database's tables accordingly.
			-webservice.js: This file contains get api functions to get information from QMPS database according to different table, adat and farm.
			-database.js: This file contains functions called by mobileserver.js and webserver.js to query database.
