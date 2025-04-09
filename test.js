// const arr = [1, 1, 3, 4, 1];
// const arr2 = []
// for (let i = 0; i < arr.length; i++) {
//     let isDub = false;
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr[i] == arr[j]) {
//             isDub = true
//             break;
//         }
//     }
//     if (!isDub) {
//         arr2.push(arr[i]);
//     }
// }

// console.log(arr2)


// function hello(n) {
//     const arr = []
//     for (let i = 2; i <= n; i++) {
//         let isprime = true;
//         for (let j = 2; j < i; j++)
//             if (i % j === 0 ) {
//                 isprime = false
//                 break
//             }

//             if(isprime){
//                 console.log(i)
//             }
//     }
// }
// hello(10)

// console.log(4 % 7)
// 0,1,1,2,3


// const arr = [0, 1, 1, 2, 3]

// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - (i + 1)]
//     arr[arr.length - (i + 1)] = temp
// }
// console.log(arr)



function greet(...names) {
  console.log(names);
  {
    console.log(x)
  }
  var x = 10;
}

greet("Ram", "Shyam", "Geeta");
// Output: ["Ram", "Shyam", "Geeta"]











----------------------- Virendra ----------------------
Q. web accessibility
Q. Angular upgrade
Q. unit testing? describe different test cases for a login component with 2 input fields, submit button & cancel button
Q. Explain angular deployment, how is it done?
Q. ngrx, flow: how state, actions, selectors, etc work
Q. template driven vs reactive form
Q. In case of multi-step forms, how will you use reactive form in it?
Q. Multilanguage support?
Q. What is responsive design? what is mobile-first approach?
Q. How is angular app deployed? (edited)
Q. let, var, const difference
Q. closure
Q. Promise vs Observable
Q. map, filter, reduce methods for array
Q. lifecyclehooks used in projects
Q. is it possible to initialize variables in a constructor
Q. building blocks of angular?
Q. data transfer between parent and child component?
Q. what are different ways to optimize a given project to minimize the rendering load and package size?? anything related to ng build?
     (Ans: ng build with aot option, instead of default JIT compilation)
Q. reactive form vs template driven form
Q. coding question using notepad, show result on a browser:- create a button using html, change its style, show alert on click
Q. typescript vs javascript? advantages of typescript?
Q. Difference between display:none & display:hidden? (edited)
------------------------Rohit Gaikwad----------------------------
My interview Questions:
What is eagerly loading
diff between DOM and BOM
what is scss... what is used to convert it to css
Why do you prefer angular in your project....what are the advantages of angular
what will happen if i disabled javascript from angular project
how to show array items present in parent comp in child comp html
what is server side rendering
difff between framework and library
can we create custom packages & how
why do we use typescript with angular....can't we use javascript
why do we write code in ngOninit instead of constructor
what is web workers
what is impure pipes
there are 2 modules and I run a command  (ng g c comp_name)  to generate comp outside that modules...where will that component gets declared
15. how to create only .ts file using CLI
<-----------------Nishant ashok jarang --------> 
difference between html4 and html5
what is web workers
closure
difference between observable and subject
box design
how can you store your data temperory in browser
what is block and inline element
Prathamesh Vibhute --> 10:36 AM
Difference between subject and behaviour.
All information about guards.
Difference between Template drive and Reactive Form.
difference between Html 5 and Html 4.
View Child, View Children.
Function to add new value in between of array.
Talk more about your project, add all small details by which he will ask you questions related to it.
Rohit Gaikwad --> 10:34 AM
L2 interview questions:
diff between observable and promises
closure
web workers
Universal angular
Data binding
angular zone
swap two variables without using temp
what is depedancy injection and services
what is MVC
diff between ecmascript and typescript
Bhanu Gurgulwar --> 10:19 AM
Bhanu's L1 interview Questions
what is diff between var ,let and const
what is call bind and apply
what is diff between normal function and arrow function
what is spread and rest operator
what is hoisting
what is lazyloading
how can we create a component in cli without having the default imports in component
what is viewchild
how can we create a component in using cli
what is two way data binding
how can we change structure of ui dyanically
what is present in Component decorator object
what is present in module decorator object
what is bootstraping
how can we create a Pipe
what is function used to create a Pipe
what is pure and impure Pipe
what are lifecycle hooks and tell execution order
diff between obervable and promise
diff between oberservable and subject
what are diff types subjets in rxjs
how can we communicate between components
do you have idea about testing
how can we write mock function for testing
what is testbed
how can we create a git branch using cli
how can we delete a branch using cli
Sanket Anandkar --> 5:30 PM
L-2 Interview Questions :
Swap two elements in array
Difference between call and apply
Let vs const
Whats Metadata in angular
Whats Dynamic component
How to use Dynamic component  in another component
Share data from grandChildren to Parent component
Why do used interceptor
What are RXJS operators
Map vs Tap operator
Subject vs Behaviour subject
Replay Subject vs Async SUbject
Angular.json vs tsconfig.json file
What's Hoisting
What's SSR
Unit Testing
How to handle one API request into another API request
How to use Preloading
What's Resolve Guard
What's ViewChild
ng-template
How to create custom package
Third party libraries used
Angular bootstraping flow
Explain polymorphism and Inheritance in javasript
Bhanu --> L2 questions
Tell me about ur projects
How can you optimize angular code
Memeory leak in angular
Difference between template driven form and reactive form
Diff between tsconfig file and angular json file
Situation based questions
Rohit interview questions:
1.what is map,filter,reduce
2.how to make website responsive without using bootstrap
3.what is web socket
4.how http request works in js
5.what is observable
6.how can you optimize your angular application
7.how make available service only for particular module/component
8.difference between button and anchor tag
9.there are multiple services injected in different components, how can you handle common error without writing code in every component
10.can you give multiple interceptor and how?
11.if we take multiple interceptor then what is the calling order?
Yash Tandulkar --> 6:38 PM
difference between null and undefined?
type of undefined?
type of null?
Hoisting?
use strict?
promise vs observable?
what is lazy Observable?
 //output of code
console.log("start");
Promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
})
Promise.then(response => {
    console.log(response);
});
console.log("end")
call,apply?
Explain differences and write example?
Injecter?
What is ViewEncapsulation?
Type of ViewEncapsulation explain each?
How to make Api request using observable write example?
 What is directive and its type?explain each type?
what is pipe and what are the  types?Explain each?
Prathamesh Vibhute --> 8:36 PM
Interview Questions:
What is Event bubbling.
What is diff betn RouterModule.forRoot() & RouterModule.forChild().
What is async and await
What is AJAX in vanila js
What is service workers
What is flex-box
How can we handle error in Observables?
What is scan() and reduce() operators in Observable?
What is diff betn Injectable and Injector?
<div data-val="1" /> what is data-val in given html element.
What is window.onload and document.ready
Difference between arrow function and normal function.
Js code
function sum(arr) {
   // write your code here
        var sum = 0;
        arr.forEach((element) => {
                num = "";
                for(i = 0; i < element.length; i++) {
                        if(parseInt(element.charAt(i))) {
                                num = num + element.charAt(i);
                        }
                }
                if(num !== "") {
                        sum = sum + parseInt(num);
                }
        })
        return sum;
}
console.log(sum(['123f','ab32d','dafa','43vf','d']))
console.log(sum(['d']))                                    // 0
console.log(sum(['13f','3d']))                             // 16
console.log(sum(['43vf','d']))
// Atleast try to write the code within 30 mins
Prathamesh Vibhute --> 6:28 PM
Interview Questions
Deep Copy & Shallow Copy
Closure
Lexical Scope
ES6 features
Auth guard and Route guard
Dependency injection
@Injectable and @Inject
Pipes - Pure and Inpure and their scenario
Directives
Data bindings
Promise and Observable
Reusable Component
Nishant ashok jarang --> 1:54 PM
event loop
callback
higher order function
 ts vs js
angular js vs angular
pipe and types of pipe
directive
routing
component to component commmunication
guard
websocket and poling
constructor vs onInit
 lifecycle hooks
 DI and services
 new feature of angular
 observalble and subject vs behavioual subject
Code ----
1.write a promise to check prime number?
2.async function foo() { const result1 = await new Promise((resolve) =>  setTimeout(() => resolve(“1”)), ); const result2 = await new Promise((resolve) =>  setTimeout(() => resolve(“2")), ); } foo();
Nishant ashok jarang --> 3:49 PM
1)what is the difference between hidden and ngIf
2)what is observable
3)what is pipe and tell its type
4)box model in css
5)difference between call and apply
6)what is directive and explain its type
7)explain server side rendering
8)shallow copy and deep copy
9)inline html in decorator
10)promise in js..
11)did you create custom pipe and which?
12)what is dependency injection..
13)how update request handle in node js and using which method
14)what is stream and how can you use in node js?
Nishant ashok jarang --> 10:10 PM
interview questions:
1.do you know what current angular vs angular js
2.did you create custom directive and tell its types also
3.what is pipe and its type and did you create any custom pipe
4.what is lazy loading and when it is load
5.how many ways we can communicate with the component
6.what is observable
7.difference between promise and observable
8.how can you improve the application performance
8.what is aot and jit
9.what is memory leaked problem
10.what is dependency injection
11.why we use promise
12.what is async and await
13.difference between typescript and javascript
14.code:
var prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },100*3);
})
prom.then((data)=>{
    console.log(data);
    return data*2;
}).then((data)=>{
    console.log(data);
    return data;
})
guess the output??
*after guessing can you apply async and await in below the code (edited) 
----
event loop
callback
higher order function
 ts vs js
angular js vs angular
pipe and types of pipe
directive
routing
component to component commmunication
guard
websocket and poling
constructor vs onInit
 lifecycle hooks
 DI and services
 new feature of angular
 observalble and subject vs behavioual subject
Code ----
1.write a promise to check prime number?
2.async function foo() { const result1 = await new Promise((resolve) =>   setTimeout(() => resolve("1")), ); const result2 = await new Promise((resolve) =>   setTimeout(() => resolve("2")), ); } foo(); (edited)
**********************************************
let a = { name: 'john' };
    let b = a;
    b.name = 'deo';
    console.log(a);
    console.log(b);
1. What is the output of code.
2. Why the value of a and b are same?
3. If we want to change the output then what changes need to do.
2. What is the output of the following code and why?
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
3. What is closure and its use and example.
4. What is the spread operator.
5. How can spread array and object.
6. Why we can use the spread operator.
7. What is authentication.
8. Which authentication is used to secure your APIs.
9. Why password is not added to the JWT token?
10. What are promises.
    1. If we want to call two APIs and send a response after completing both the APIs. How can we achieve it?
     2. If one of API call gets failed and we want to send both result to client then what method would be used?
11.  user collection:
[
  {name: "person a", skills: ['mysql', 'mongo', 'react'] },
  {name: "person b", skills: ['node', 'mongo', 'react'] },
...
]
1. Write a query to get all the user details with matching skills 'react' or 'mongo'
2. Write a query to get all the user details with matching skills 'react' and 'mongo'
1. Difference  between let, var, and const
2. Which promise method is used to execute all API calls parallel
3. What is the bind method and the difference between call and bind.
4. What will be the output of the following code and why?
function two() {
    console.log('myVar', myVar);
}
function one() {
    var myVar=2
    two()
}
var myVar=1
one()
5. What will be the output of the following code and why?
function printHello() {
    console.log('Hello')
}
printHello()
6. What will be the output of the following code and why?
printHello2()
var printHello2 = function() {
    console.log(' printHello2 Hello')
}
7. What is an event loop?
8. What will be the output of the following code and why?
console...
Collapse



















Message Tejas Patil















