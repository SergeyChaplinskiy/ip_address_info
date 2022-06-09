const os = require('os');
const https = require('https');

const getInternalIp = () => {
  const paramIp = os.networkInterfaces();
  let internalIp = '';

  Object.keys(paramIp).forEach((name) => {
    paramIp[name].forEach((iface) => {
      if (iface.family === 4 || iface.family === 'IPv4') {
        internalIp += `${iface.address}\n`;
      } else if (iface.address === undefined) {
        internalIp = '0.0.0.0';
      }
    });
  });

  return console.log(internalIp);
};

const callback = (err, ip) => {
  if (err) {
    return console.log(err);
  }
  return console.log(ip);
};

const getExternalIp = () => {
  https.get({
    host: 'api.ipify.org',
  }, (response) => {
    let ip = '';
    response.on('data', (data) => {
      ip += data;
    });
    response.on('end', () => {
      if (ip) {
        callback(ip);
      } else {
        callback('0.0.0.0');
      }
    });
  });
};

module.exports = {
  getInternalIp,
  getExternalIp,
};
