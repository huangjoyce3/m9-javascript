// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
document.addEventListener("DOMContentLoaded", function(event) {
  // Create a new input element
  var input = document.createElement("input");
  var t = document.createTextNode("input here");

	// Append the new input element to you DOM in the desired location
	input.appendChild(t);
	document.body.appendChild(input);
	// Assign a click event to your button that:
	document.getElementById("button").onclick = alert('hi');
		// Creates a new paragraph of text from your input element, and:
		// Clears the text of the input element
});
