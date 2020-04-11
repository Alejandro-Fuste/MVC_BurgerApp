// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port: 3306,
	user: 'r4gs5dhwo20fmwj2',
	password: 'ravpn1uk2eofg34x',
	database: 'aowsui2ev79lc7tv'
});

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
