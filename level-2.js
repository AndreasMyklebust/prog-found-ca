// question 1

for (var i = 15; i < 26; i++) {
   if (i % 2 === 0) {
      console.log(i);
   }
}

// question 2

function logFunction() {
   console.log("I am a function");
}

var innerFunction = logFunction;

function outerFunction(argument) {
   argument();
}

outerFunction(innerFunction);
