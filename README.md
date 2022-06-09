## Hi, friend! :wave:

**I created my own module so that you can find out the ip addresses of connected network devices and their name**

## Installation
To install, type the following command in the terminal:
```
npm install ip_address_info
```
## Usage
Just import and run the code by writing in the terminal **node mainFileName.js**.
```js
const getIpInfo = require('ip_address_info');
```
to see the public or private ip, just call the method.

```js
getIpInfo.getExternalIp();
getIpInfo.getInternalIp();
```
### Thanks. :smirk: