const rp = require('request-promise');
const config = require('../config.js');

module.exports = function createDevice(deviceTypeId, value){
    var options = {
        method: 'POST',
        uri: config.gladysUrl + '/devicestate?token=' + config.token,
        body: {devicetype: deviceTypeId, value: value},
        json: true,
	rejectUnauthorized: false
    };

    return rp(options);
};
