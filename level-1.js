// question 1

var animal = "horse";

// question 2

var person = {
   name: "Andreas",
   age: 27
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
   console.log("Out of Stock");
} else {
   console.log("In stock");
}

// question 4

var numberArray = [1, 3, 5, 7, 11];

for (var i = 0; i < numberArray.length; i++) {
   console.log(numberArray[i]);
}

// question 5

for (var i = 15; i < 26; i++) {
   console.log(i);
}

// question 6

for (var i = 15; i < 26; i++) {
   if (i === 20) {
      console.log(i);
   }
}

// question 7

var persons = [
   {
      firstName: "andreas",
      age: 27,
      adult: true
   },
   {
      firstName: "frank",
      age: 15,
      adult: false
   }
];

for (var i = 0; i < persons.length; i++) {
   console.log(persons[i].age);
   console.log(persons[i].adult);
}

// question 8

function whatIDontLike(dislikes) {
   console.log("I don´t like " + dislikes);
}

whatIDontLike("grumpy people");

// question 9

function change(total, paid) {
   console.log(total - paid);
}

change(175, 200);

// question 10

var colorArray = [];

function addColor(color) {
   colorArray.push(color);
}

addColor("red");
