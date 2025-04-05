Yes! let, const, and var are called variable declaration keywords

Spread vs Rest

Rest: - used to collect remaining elements 

Ex:
1. const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

2. function greet(...names) {   // here we dont know how many parameters we goin to pass 
  console.log(names);
}

greet("Ram", "Shyam", "Geeta"); 
// Output: ["Ram", "Shyam", "Geeta"]

------------------


Spread: Copying or expanding  objects/array or , updating object 

const user = { name: "John", age: 25 };
const newUser = { ...user, name: "New York" };

console.log(newUser); // { name: "John", age: 25, city: "New York" }



--------------------------
Closures
Ex - 1: 
for (var i = 0; i < 3; i++) {
    (function myFunc(i) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }(i))
}
// -> 0 1 2  if we dont use iife function the output will be 3 3 3

Ex - 2:
function secretCounter() {
  let count = 0; // Private variable

  return function () {
    count++; // Only accessible inside
    console.log(count);
  };
}

const counter = secretCounter();
counter(); // 1
counter(); // 2
counter(); // 3 (but `count` is not directly accessible)

- A closure is when a function remembers and accesses variables from its outer scope, even after that scope has finished executing.
-From google: a closure is a function's ability to access variables from its outer (or parent) scope, even after the outer function has finished executing, due to the inner function retaining a reference to that outer scope

-------------------------------
var vs let : RHS
1. Scope
var has function scope / let has block scope  
function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a); // ✅ 10 (function scoped)
  console.log(b); // ❌ ReferenceError (block scoped)
}

2. Hoisting:
var and let are both hoisted but var initialized with undefined and let dont 

3. Redeclaration:
var a = 3
var a = 3

--------------------------
for-in:  - first created 
 was used to deal with object
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}


for-of: for array 

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} : ${value}`);
}

------------------------
ECMA6 - 2015 
1. let, const 
2. template literals `${}`
3. destructuring -  spread and rest operator
4. promises
5. default parameter 
ex: function greet(name = "Guest") {

}
6. IIFE 

-----------------------------
JSON - is data format.
JSON - javascript object notation 

Sending data to/from a server

Storing config/data in files

APIs return data in JSON


---------------------------------
unary functions:

A unary function is a function that takes exactly one argument.
Some methods (like map) often use unary functions:
[1, 2, 3].map(x => x * 2); // `x => x * 2` is a unary function


------------------------------------------------------------------------

------------TS--------
what is TS: - TypeScript is a superset of JavaScript that adds static typing
provides type ssafty 
Detects bugs early
Better code completion/intellisense 

Type	Example

string	"hello"
number	123
boolean	true/false
any	any value
unknown	safer version of any
void	no return value
never


Situation	                Use interface ✅	            Use type ✅
Object with structure	        ✔️	                           ✔️
Extending with extends	    ✔️ Clean and readable	            Can use & (intersection)
Union / primitives	            ❌ Not allowed	            ✔️ Allowed
Functions / complex types	❌ Not ideal	                    ✔️ More flexible


Class : A class in TypeScript is a blueprint for creating objects,- supports object-oriented features
interface : An interface defines the structure of an object — it’s like a contract for objects, specifying required properties or method signatures, without implementation.

A type alias: lets you give a name to any type — objects, primitives, unions, functions, etc.
It’s more flexible than interface.




