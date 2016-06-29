console.log("-----------------------------");
console.log("functions.js");

function multiply(x, y) {
	return x * y;
}
console.log(multiply(5, 3));

// Function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

// Function constructors
function Circle (radius) {
	this.radius = radius;
	console.log(this);
}

Circle.prototype.getArea = // Does not get recreated every time a new Circle object instance is created
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	};

var myCircle = new Circle(10); 	
console.log(myCircle.getArea());

// Object literals and "this"
var literalCircle = { // new Object()
	radius: 10,
	getArea: function() {
		console.log(this);

		var increaseRadius = function () {
			this.radius = 20; // Starts pointing to the global object, aka Window.
			console.log(this);
		};

		increaseRadius();

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

var literalCircle = { // new Object()
	radius: 10,
	getArea: function() {
		var self = this;
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20;
			console.log(self);
		};

		increaseRadius();

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

// Immediately Invoked Function Expression
// IIFE

(function (name) {
	console.log("Hey " + name);
})("Steve");