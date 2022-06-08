
const os = require('os');

const getIpInfo = () => {
    const paramIp = os.networkInterfaces();
    const ip = [];
    let scor = 1;

    Object.keys(paramIp).forEach(function (name) {
        paramIp[name].forEach(function (iface) {
            if (iface.family === 4 || iface.family === 'IPv4') {
                internalIp = iface.address;
                ip.push(`internal ip address ${+scor}: ${internalIp} device name "${name}"`);
                scor++;
            } else if (iface.address === undefined) {
                ip.push(`ip address not found: 0.0.0.0`);
            }
        })
    })
    return ip;
}

module.exports = {
    getIpInfo
};


