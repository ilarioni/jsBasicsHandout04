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

// concat()
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);

var myNeighbours = ["Markus", "Flo"];
var myPeople = myGirls.concat(myBoys,myNeighbours);
console.log(myPeople);

// slice()

var cities = ["Munich", "Regensburg", "Augsburg", "Passau", "Nuremberg"];
console.log(cities);
console.log(cities.slice(2));
console.log(cities.slice(2,4));

// Array methods
// toSting() join()
// pop() push()
// shift() unshift() 
// splice() concat() slice()

// Array sorting 

console.log(cities.sort());
console.log(cities.reverse());

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
    return b - a
});
console.log(points);

points.sort(function(a,b){
    return a - b
});
console.log(points);

// sort() reverse() the compare function using sort

// Array Iteration Methods

// forEach()
// map()
// filter()
// reduce
// every()
// some()
// indexOf()
// lastIndexOf()
// find()
// findIndex()

var txt = "";
var numbers = [45,4,9,16,25];
// numbers.forEach(myFunction);
// function myFunction(value) {
//    txt = txt + value + "<br>";
// }

var numbers1 = [45,4,9,16,25];
var numbers2 = numbers1.map(myFunction);
function myFunction(value) {
    return value * 2;
}
console.log(numbers2);

var num = [45,4,9,16,25];
var over18 = num.filter(myFunk);
function myFunk(value, index, array) {
    return value > 18;
}
console.log(over18);

var numb1 = [45,4,9,16,25];
var sum = numb1.reduce(mySum);
function mySum(total, value, index, array) {
    return total + value;
}
console.log("sum is - " + sum);

var numbers22 = [45,4,9,16,25];
var allOver18 = numbers22.every(myOver);
function myOver(value, index, array) {
    return value > 18;
}
console.log("it says if all members of array passed the text - " + allOver18);
var numeric = [45,4,9,16,25];
var someOver18 = numeric.some(myTest);
function myTest(value, index, array) {
    return value > 18;
}
console.log("it shows if some of the array elements passed the test - " + someOver18);

var food = ["Apple", "Orange", "Kiwi", "Mango"];
var a = food.indexOf("Apple");
console.log("above mentined element has position - " + a);

var chords = [4,3,16,15,29];
var first = chords.find(myChords);
function myChords(value, index, array) {
    return value > 18;
}
console.log("this is first elements that passed the test - " + first);
