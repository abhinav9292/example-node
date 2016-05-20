var Calculator = function() {
  if(!(this instanceof Calculator)) {
    return new Calculator();
  }
};

Calculator.prototype.add = function() {
  return 'Adding variables';
};

Calculator.prototype.subtract = function() {
  return 'Subtracting variables';
};

module.exports = Calculator;
