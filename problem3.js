/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

var isPrime = function (x) {
	for (var i = 2; i < x; i++) {
		if (!(x%i)) { 
			return false;
		}
	}
	return true;
};

var largestPrimeFactor;

for (var i = 2; i < 10000; i++) {
	if (isPrime(i) && !(600851475143 % i) && (i != 1 || i != 600851475143)) {
		largestPrimeFactor = i;
		console.log (largestPrimeFactor);
	}
}

console.log ("Largest prime factor: " + largestPrimeFactor);