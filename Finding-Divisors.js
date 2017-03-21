/*
For finding all of the divisors of a single number, we can speed things up by using the square root trick if we store each number that properly divides AND the result of said division. Explained better:
When trying to find all proper divisors of a number, you can stop checking at the square root of the number. So if you want all proper divisors of 100, you would stop checking at 10 because all proper divisors are already found if you store the current number you're dividing 100 by and the result you get. So when doing 100/2 for instance, you would store both 2 and the result(50) as proper divisors. So here we can see it in play:

100/2 = 50 so 2 and 50 are proper divisors
100/3 = not proper
100/4 = 25 so 4 and 25
100/5 = 20 so 5 and 20
100/6 = not proper
100/7 = not proper
100/8 = not proper
100/9 = not proper
100/10 = 10 so 10 and 10 // 10 is the square root of 100. All divisors found. Any proper divisor above this are already found.
*/

/*
When trying to find the divisors of multiple numbers(say all divisors of numbers 10-100), we can use an approach I used on Euler problem 23. What I do is create a two dimensional array, or a "data-table". The first column of the rows consist of the number we want the proper divisors of and it's following columns will consist of it's proper divisors. The data table would look like this for numbers 1-6:
[1][1]
[2][1][2]
[3][1][3]
[4][1][2][4]
[5][1][5]
[6][1][2][3][6]

The way we generate this table is by doing the following:

1. Generate a new row in a predefined array(we'll call it "a") for each number we want to find the divisors of by doing:*/
	var a = [0];
	for(i=1; i<7; i++) {
		a.push([i]);
	}/*

2. Starting from n, we push n to all of it's multiples by incrementing by n. This means we do not need to iterate over the numbers that it does not divide into properly. ie: We don't need to attempt to divide 2 into each of our numbers, we can simply take it and add it to every one of it's multiples by incrementing by 2. IE: 2 would be placed in row 2, row 4 and row 6. We would do this by doing the following loop:*/
for(i=1; i<7; i++) {
	for(j=i*2; j<7; j+=i) {
		a[j].push(i);
	}
}

/*
3. Alternatively we can do it all at once. We need to check if this is the first iteration of the outer loop(ie: when i = 1) and create the rows as we go. Right before we place 1 in all of it's multiples' rows, we create it's rows first. Example: For 100 */
var a = [	[0],
			[1]
		];
for(i=1; i<=100; i++) {
	for(j=i*2; j<=100; j+=i) {
		if(i === 1) {
			a.push([j]);
		}
		a[j].push(i);
	}
}