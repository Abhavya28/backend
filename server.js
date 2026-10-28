console.log('Hello');

const os = require('os');
const path = require('path');
const math = require('./math');
const {mul, div} = require('./math')

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(math.add(5,4));
console.log(math.sub(5,4));
console.log(mul(5,4));
console.log(div(5,4));