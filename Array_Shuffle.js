// Declare the variable we want to shuffle.
var myArray = ["1","2","3","4","5"];

// Set myArray to shuffleArray(myArray).splice(). The function called returns a shuffled version of itself and .splice() returns all of it's elements and allows us to copy them.
myArray = shuffleArray(myArray).slice();


// The function that actually shuffles the array sent to it as a parameter. This is essentially a Fisher-Yates shuffle (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle.) with minor differences. It is an in-place shuffle.
function shuffleArray(a) {
  for(i=0; i<a.length-1; i++) {
    var x = Math.round(Math.random()*(a.length-1 - i)+i);
    var temp = a[i];
    a[i] = a[x];
    a[x] = temp;
  }
  return a;
}

/* 
The shuffle works as follows:
1. We set x to a random index position between our current position(i) and the last position(a.length-1) of our array.
2. We switch the value at our current position of i to the value at position x.
3. We increase i by 1 and repeat until we reach the second to last position(because the last position can only switch with itself, since the current position of i would equal to the last position of the array).

To shuffle an array just call the function like so: yourArray = shuffleArray(yourArray).slice(); Alternatively, like mentioned above, if you're only shuffling one array or simply don't want to use the function, you can simply copy the for loop in the shuffleArray function and change a to your array name, no copying or slicing required as it is an in place shuffle; all that is happening are the index values are being shuffled around. Example: */

var myArray = ["1","2","3","4","5"];
console.log("Before shuffle: "+myArray);
for(i=0; i<myArray.length-1; i++) {
    var x = Math.round(Math.random()*(myArray.length-1 - i)+i);
    var temp = myArray[i];
    myArray[i] = myArray[x];
    myArray[x] = temp;
  }
console.log("After shuffle: "+myArray);


/*
Note:
I understand that if you're not going to need to shuffle more than a couple of arrays it may be more effecient to just simply use a for loop specific to each array so you don't have to use .slice(). I just wanted to create a function that could be used through out any long script that may require many different arrays be shuffled; this way it could all be done by one function rather than writing a ton of for loops.
*/