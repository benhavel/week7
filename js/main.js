var myH1 = document.getElementById("red")
	myH1.innerText = "Hello There!";

function myFunction() {
  document.getElementById("doSomething").innerHTML = "Hello World";
}

function myFunction() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		doSomething.innerText = userInput;
}

var cars = ["Saab", "Volvo", "BMW", "Tesla", "Toyota"];

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var myObj = {
	name: "Ben",
	age: 26,
	isMale: true
};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isMale);

var blue = document.getElementById("blue");
var green = document.getElementById("green");
var white = document.getElementById("white");

	blue.innerText = myObj.name;
	green.innerText = myObj.age;
	white.innerText = myObj.isMale;

var myArray = [
		{
			name: "Superman",
			author: "DC",
			genre: "comics"
		},
		{
			name: "Batman",
			author: "DC",
			genre: "comics"
		},
		{
			name: "Wolvereen",
			author: "marvel",
			genre: "comics"
		}
];

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].name);
	console.log(myArray[i].author);
	console.log(myArray[i].genre);
}



document.body.style.color = "red";
