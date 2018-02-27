var DeviceInfo = require('react-native-device-info');

module.exports = function (iface, callback) {
    DeviceInfo.getMACAddress()
        .then(mac => {
            callback(null, mac)
        })
        .catch(callback);
};
