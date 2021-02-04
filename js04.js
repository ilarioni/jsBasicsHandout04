// Array Methods and Array Sorting
// toString() join()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.join(" - "));

// pop() & push() - last element on the right side
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Kiwi"));
console.log(fruits);

// shift() unshift() - first element on the left side
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Lemon"));
console.log(fruits);

// changing elements with index numbers
var vegetables = ["Banana", "Orange", "Apple", "Mango"];
vegetables[0] = "Kiwi";
console.log(vegetables);

// adding element with length method
vegetables[vegetables.length] = "Lemon";
console.log(vegetables);

// splice() first parameter defines where new elements should be added(spliced in) second element defines how many elements should be removed 
console.log(vegetables.splice(2,0,"Lemon", "Kiwi"));
console.log(vegetables);

var cars = ["Volvo", "BMW", "Seat", "VW"];
console.log(cars.splice(2,2,"Audi", "Honda"));
console.log(cars);

//we can use splice() method to remove elements
console.log(cars.splice(0,1));
console.log(cars);
