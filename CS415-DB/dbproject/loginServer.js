

const mysql = require('mysql');
const express = require('express');
const appl = express();
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'userDB'
});
connection.connect(error => {
	if (error) throw error;
	console.log("Connected to the database");
  });
  appl.use(express.static('public'));
appl.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})
  appl.post("/login_get", (req, res) => {
	// Get the values of the input fields
	var user_id = req.body.user_id;
	var password = req.body.password;
  
	// Check if the input fields are empty
	if (user_id  == "" || password == "") {
	  res.send("Username and password must be filled out");
	  return;
	}
  
	// Execute a SQL query to select the role from the user table where the username matches the entered username
	connection.query(
	  "SELECT role FROM user WHERE user_id = ?",
	  [user_id ],
	  (error, results) => {
		if (error) throw error;
  
		// Check if a user with the entered username was found
		if (results.length > 0) {
		  // A user with the entered username was found
		  // Get the role of the user
		  var role = results[0].role;
  
		  // If the entered username and password are valid, redirect the user to the appropriate page based on their role
		  if (role == "admin") {
			res.redirect("/login.html");
		  } else {
			res.redirect("/home");
		  }
		} else {
		  // No user with the entered username was found
		  res.send("Invalid username or password");
		}
	  }
	);
  });
  
  


var server2 = appl.listen(122, function () {
	var host = server2.address().address
	var port = server2.address().port
	
	console.log("Example appl listening at http://%s:%s", host, port)
 });