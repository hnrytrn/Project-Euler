/* A palindromic number reads the same both ways. The largest palindrome made 
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

var largest = 0;

for (var i = 100; i < 1000; i++) {
	for (var j = 100; j < 1000; j++) {
		var product = i * j;
		if (isPalin(product) && product > largest) {
			largest = product;
		}
	}
}
console.log(largest);

function isPalin(num) {
	return (String(num) === reverse(String(num)));
};

function reverse(s){
    return s.split("").reverse().join("");
};