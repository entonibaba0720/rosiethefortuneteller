function rosieTheFortuneTeller() {
	var name = prompt("Hi,dear! My name is Rosie and I am an expert fortune teller. What is your name?");
	var answer = prompt("Yes, I have seen that you would come to me, " + name + ". Now please, choose one from the following and type it in the box: turtle, rose, teacup, moon.");
  var future = alert("Hmm... " + name + ". Excellent choice. Let us see what your future holds.");

	 if (answer=='turtle') {
		alert("Here is your fortune: Do not panic.");

	} else if (answer=='rose') {
		alert("Here is your fortune: You will find a thing. It may be important.");

	}  else if (answer=='teacup') {
		alert("Here is your fortune: The end is near, might as well have dessert.");

	} else if (answer=='moon') {
		alert("Here is your fortune: Look before you leap. Or wear a parachute.");

	} else {
		alert("I am sorry, " + name +". I do not think I understand you correctly. Are you sure you tiped in one of the offered possibilities?");
	}
} //end function
rosieTheFortuneTeller();
