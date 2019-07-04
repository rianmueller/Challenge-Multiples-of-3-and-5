/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  let sum = 0;

  function multiples() {
    let total = 0;
    for (i = 0; i < n; i++) {
      if (i % 3 === 0) {
        total = total + i;
      } else if (i % 5 === 0) {
        total = total + i;
      }
    }
    return total;
  };
  sum = multiples(n);
  
  return sum;
};
