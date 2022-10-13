/**
 * Instructions
 * 
 * Create a function that takes a number as an argument and returns the square root of that number. Please truncate the result to the floor whole number.
 * 
 * Examples:
 * Input = 4
 * Output = 2
 * 
 * Input = 8    
 * Output = 2 (square root of 8 is 2.8284271247461903, your function should return 2 instead of the decimal)
 * 
 * Requirements: 
 * 
 * You cannot use any built-in exponent functions or operator (such as Math.sqrt(), pow(x, 0.5), or x ** 0.5).
 */


 const mySqrt = (x) => {
    if (x <= 1) return x;
    let l = 0;
    let r = x;
    while (l < r - 1) {
      let middle = Math.floor((l + r) / 2);
      let val = middle * middle;
      if (val == x) return middle;
      if (val > x) r = middle;
      else l = middle;
    }
    return l;
  };

  // Big O: O(log n)