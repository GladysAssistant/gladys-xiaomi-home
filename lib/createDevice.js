const rp = require('request-promise');
const config = require('../config.js');

module.exports = function createDevice(device){
    var options = {
        method: 'POST',
        uri: config.gladysUrl + '/device?token=' + config.token,
        body: device,
        json: true,
	rejectUnauthorized: false
    };

    return rp(options);
};
