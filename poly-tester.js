// Checks if our string is palindromic.
var ourString = "A Man, /.,.()^&*A Plan, A Canal__-Panama!";
isPalin(ourString);

function isPalin(string) {
// Make all lower case for case insensitivity and replace all spaces, underscores and non-words.
string = string.toLowerCase().replace(/\s+/g, "").replace(/\W/g,"").replace(/_/g,"");
console.log(string);
for(i=0; i<=Math.floor(string.length/2-1); i++) {
	  if(string[i] !== string[string.length-1-i]) {
	    console.log("Your string is not palindromic!");
	    break;
	  } else if(i === Math.floor(string.length/2-1)) {
	    console.log("Your string is palindromic!");
	  }
	}
}