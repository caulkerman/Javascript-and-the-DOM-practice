document.getElementById("myButton").onclick=function() {
	alert("Hi!");
}

document.getElementById("textChanger").onclick=function() {
	document.getElementById("firstDiv").innerHTML="This is Awsome!!";
}

document.getElementById("textAppender").onclick=function() {
	document.getElementById("secondDiv").innerHTML=document.getElementById("secondDiv").innerHTML + "Great!";
}

document.getElementById("textCreator").onclick=function() {
	document.getElementById("emptyDiv").innerHTML="<ul><li>Cat</li><li>Dog</li></ul>";
}

document.getElementById("circle").onclick=function() {
	document.getElementById("circle").style.visibility = "hidden";
} 

var newText = document.getElementById("myInput").value;

document.getElementById("inputButton").onclick=function () {
	newText = document.getElementById("myInput").value;
	document.getElementById("someTextDiv").innerHTML = newText;
	document.getElementById("myInput").value = "";
}
//the small array below is simply there to practice making an array.
//only the "Chocolate" is used in the app.
var myArray = [];
myArray[0] = "Pizza";
myArray[1] = "Chocolate";

document.getElementById("arrayButton").onclick = function() {
	document.getElementById("arrayDiv").innerHTML = myOtherArray[1];
}


var myOtherArray = ["rain", "sunshine", "cloudy", "hail", "fog"];
var theWeather = document.getElementById("weather").value;

document.getElementById("weatherbutton").onclick = function() {
	theWeather = document.getElementById("weather").value;
	for (var i = 0; i < myOtherArray.length; i++) {
		if (theWeather === myOtherArray[i]) {
			document.getElementById("weatherSpan").innerHTML = myOtherArray[i];
			alert("You chose to have a" + " " + myOtherArray[i] + " " + "day!!!");
		} 
			document.getElementById("weather").value = "";
	}
}

document.getElementById("guess").onclick = function() {
	var gotit = false;
	var guesses = 1;
	var num;
	while (gotit == false) {	//this function only works as long as you use == and not ===.  === will send it through an infinite loop. 
		num = Math.floor(Math.random() * 6);
		console.log(num);
		if (document.getElementById("myNumber").value > 5) {
			alert("You need to enter a number 5 or less");
			document.getElementById("myNumber").value = "";
			return;
		}
		if (document.getElementById("myNumber").value == num) {//this function only works as long as you use == and not ===.  === will send it through an infinite loop.
			gotit = true;
		} else {
			guesses++;
		}
	}
	alert("Got it! It was a " + num + ". It only took me " + guesses + " guesses!");
	document.getElementById("myNumber").value = "";
};


document.getElementById("box").onclick = function() {
	this.style.display = "none";
	var time = Math.random();
	time = time * 5000;
setTimeout(function() {
	document.getElementById("box").style.display = "block";}, time);
}
	
var time = Math.random();
time = time * 3000;

setTimeout(function() {
	document.getElementById("box").style.display = "block";
}, time);