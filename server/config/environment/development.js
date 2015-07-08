'use strict';

// Development specific configuration
// ==================================
module.exports = {
	DOMAIN:'http://localhost:9000',
	pingipv6:'2001:bf7:540:0',
	//ms
	SCAN_TIMER:{
		ping:1000,
		recv:5000,
	},
	// MySQL connection options
	database: {
		db:    process.env.MYSQL_DB ||
						'monitormap',
		user:    process.env.MYSQL_USER ||
						'monitormap',
		password:    process.env.MYSQL_PASSWORD ||
						'monitormap',
		host:    process.env.MYSQL_HOST ||
						'localhost',
		port:    process.env.MYSQL_PORT ||
						3306
	}
};
