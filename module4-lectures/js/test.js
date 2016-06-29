console.log("test.js");
console.log("----- 1 -----");

var a = "0";

function print() {
	console.log(a);
	var a = "1";
}
print();

console.log("----- 2 -----");

function b()
{
	return
	{
		name: "Steve"
	};
}

function c() {
	return {
		name: "Steve"
	};
}

console.log(b());
console.log(c());

console.log("----- 3 -----");

function order(dish) {
	dish = dish || "anything";
	console.log("Ordered " + dish);
}

order("chicken");
order();

console.log("----- 4 -----");

var company = {
	name: "Los Pollos Hermanos",
	ceo: {
		firstName: "Gustavo",
		lastName: "Fring"
	}
};

console.log(company);

console.log("----- 5 -----");

// Primitives are passed/copied by value
// Objects are passed/copied by reference
var a = { x: 7};
var b = a;

b.x = 5;

console.log(a.x);
console.log(b.x);

console.log("----- 6 -----");

function add (x, y) {
	return x+y;
}

console.log("1 + 2 = " + add(1,2));
console.log("a + 2 = " + add("a", 2));
console.log("b + (empty) = " + add("b"));
console.log("2 + (empty) = " + add(2));
console.log("(empty) = " + add());

console.log("----- 7 -----");

function printText(text) {
	console.log(text);
}

printText("Hello", "World");