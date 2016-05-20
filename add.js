module.exports = function() {
  return arguments[0].reduce(function(a, b) {
    return parseInt(a) + parseInt(b); 
  }, 0);
};
