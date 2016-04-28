var rimraf = require('rimraf');
var fs = require('fs');

var dir = '../build';

rimraf(dir, function (err) {
	if (err) {
		throw err;
	}
	
	if (process.argv.indexOf("createdir") >= 0) {
		fs.mkdirSync(dir);
	}
});
