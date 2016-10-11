// Main JavaScript File

// String variable
var str = "this is a sentence";

// Use the length property to see how many characters are in your `str` variable
var n = str.length;

// Use the `toUpperCase` method to create a new variable `STR` that has the `str` value, but all UPPPERCASE.
var STR = str.toUpperCase();
// Use the "split" method create a new variable `words` that is an array of the component words of `str`
var arr = str.split(" ");

// Use the length property to see how many words are in your `words` array
console.log(arr.length);

// Write a function that returns the number of words in a string
var numWords = function(a){
	var results = a.split(" ");
	return results.length;
	//return a.split(" ").length;
};
// Pass a string to your function to determine that it works

// Write a function to test if a string contains a word, and returns a boolean value.
var typeFinder = function(a){
	return typeof(a);
};

// Pass a phrase and a string to your function to determine that it works
