console.log('Hello World')
// Comment
/*Comment*/
console.log("%cHello, World", "color: blue; font-size: 40px");

// const btn = document.getElementById('btn');
// btn.addEventListener('click', changeText);

// function changeText () {
//     document.getElementById('text').innerHTML = 'I just changed the text';
// }

// Displaying text in the browser
console.log("Hello ", "there, ", "World")
console.log("Hello "+ "there, "+ "World")

// Variable
var person = "RICHBOB"
var greeting = "Hello"
console.log(greeting, person)

// Trys
// Assigning Variables
var petDog = "Rex"
var petCat = "Pepper"

// Running Variables
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is:", petDog)
console.log("My pet cat's name is:", petCat)
var catSound = "purr"
var dogSound = "woof"
console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)

// Reassigning Variables
var catSound = "meow"
console.log(petCat, "now says", catSound) 

// Data Types
// String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Operators
// Graeater than(>), Less than(<), Equal to(==), Not equal to(!=)
a = 6
console.log(a>5 && a<10)
console.log(a>5 || a<10)
console.log(!(a>5))

// Operators
// The logical AND operator in JavaScript: &&
var currentTime = 9;
console.log(currentTime > 9 && currentTime < 17);

// The logical OR operator in JavaScript: ||
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

// The logical NOT operator: !
var petHungry = true;
petHungry = !petHungry;
console.log(petHungry);

// The modulus operator: %
console.log(22 % 5);

// The equality operator, ==
console.log("5" == 5);

// The strict equality operator, ===
console.log("5" === 5);

// The inequality operator, !=
console.log(5 != "5");

// The strict inequality operator !==
console.log(5 !== "5");

// Using the + operators on strings and numbers
console.log(365 + " days") // "365 days"
console.log("inter" + "net") // "internet"

// The addition assignment operator, +=
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

/* You can simplify the above code by using 
the addition assignment operator, as follows:*/
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

// For Strings
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

// Operator precedence and associativity
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
