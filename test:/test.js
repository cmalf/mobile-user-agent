const randomUserAgent = require('../MobileUserAgent');

let AndroidUA = randomUserAgent('android');
let IosUA = randomUserAgent('ios');
const RandomUA = randomUserAgent('random'); // or let RandomUA = randomUserAgent();

console.log('\nAndroid UserAgent:', AndroidUA);
console.log('\nIos UserAgent:', IosUA);
console.log('\nRandom Mobile UserAgent:', RandomUA);