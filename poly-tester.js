// Checks if our string is palindromic. Case sensitive. Poop !== pooP.
var ourString = "poop";
isPalin(ourString);

function isPalin(string) {
for(i=0; i<=Math.round(string.length/2); i++) {
	  if(string[i] !== string[string.length-1-i]) {
	    console.log("Your string is not palindromic!");
	    break;
	  } else if(i === Math.round(string.length/2)) {
	    console.log("Your string is palindromic!");
	  }
	}
}