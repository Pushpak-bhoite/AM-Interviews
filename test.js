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



// function greet() {
//     function inner() {
//         console.log(x)
//     }
//     let x = 10;
//     inner()
// }

// const x = greet();
// x()
// Output: ["Ram", "Shyam", "Geeta"]


const obj = [{type:'number', value:1}, {type:'string', value:'ram'}, {type:'number', value:3}]
// filter elements which has property 'type' value 'number' . 

const obj1 = [{key:1, value:1}, {key:2, value:'ram'}, {key:1, value:3}, {key:'boolean', value: true}]
// unique objects having key's value unique. o/p => [{key:1, value:1}, {key:1, value:3}]

// They gave me api to call it in react and render data in table format. api:- https://jsonplaceholder.typicode.com/users







