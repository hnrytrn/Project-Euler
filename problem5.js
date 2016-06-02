/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

var smallest = 0;
var currentNum = 1;

while (!smallest) {
	for (var i = 1; i <= 20; i++) {
		if (!(currentNum % i)) {
			if (i === 20) {
				smallest = currentNum;
			}
			continue;
		}
		else {
			break;
		}
	}
	currentNum++;
}
console.log(smallest);