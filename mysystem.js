var os = require('os');

var message = 'Here is some info about your system';

var sysarray = new Array('Type: ' + os.type(),
						'Node Version: ' + process.version,
						'Platform:' + os.platform(),
						'Hostname: ' + os.hostname(),
						'Total Memory: ' + os.totalmem(),
						'Free Memory: ' + os.freemem(),
						'Uptime: ' + os.uptime()
						);
console.log(message);

var arraylength = sysarray.length;

var i = 0;

while (i < arraylength) {
	console.log(sysarray[i]);
//	console.log(i);
	i++;
}