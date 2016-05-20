var add = require('./add');

var args = process.argv.slice(2);
var sum = add(args);
console.log('The sum of numbers is: ' + sum);
