// import orm
const orm = require('../config/orm');

// code that calls the ORM functions

let table = 'burgers';

const burger = {
	all: function(cb) {
		orm.selectAll(table, function(res) {
			cb(res);
		});
	},
	create: function(b_name, dev, cb) {
		orm.insertOne(table, b_name, dev, function(res) {
			cb(res);
		});
	},
	update: function(bool, idNum, cb) {
		orm.updateOne(table, bool, idNum, function(res) {
			cb(res);
		});
	}
};

// export this file
module.exports = burger;
