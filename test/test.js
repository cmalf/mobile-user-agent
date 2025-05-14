const mobileUserAgent = require('../MobileUserAgent');

let AndroidUA = mobileUserAgent('android');
let IosUA = mobileUserAgent('ios');
const RandomUA = mobileUserAgent('random'); // or let RandomUA = mobileUserAgent();

console.log('\nAndroid UserAgent:', AndroidUA);
console.log('\nIos UserAgent:', IosUA);
console.log('\nRandom Mobile UserAgent:', RandomUA);