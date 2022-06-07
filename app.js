
const os = require('os');

const infoIp = () => {
    const paramIp = os.networkInterfaces();
    const ip_ = [];
    let scor = 1;

    Object.keys(paramIp).forEach(function(name){
        paramIp[name].forEach(function (iface) {
            if(iface.family === 4 && iface.internal !== false){
                localIp = iface.address;
                ip_.push(`local ip address: ${localIp}`);
            }
            else if(iface.family === 4 && iface.internal === false){
                externalIp = iface.address;
                ip_.push(`external ip address(v4) ${+scor}: ${externalIp} device name "${name}"`);
                scor++;
            }else if(iface.address === undefined){
                ip_.push(`ip address not found: 0.0.0.0`);
            }
        })
    })
    return ip_;
}

module.exports = infoIp();

console.log(infoIp());
