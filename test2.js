// function arm(n) {
//     const len = n.toString().length
//     let sum = 0;
//     // n = tempNo;
//     for (let i of n.toString()) {
//         let mul = Math.pow(i, len);
//         sum = sum + mul;
//     }
//     console.log('sum-->', sum)
// }
// arm(153)

// // let hii = 10
// console.log(1023 % 10)

// // ---------------






// const data = [
//     { key: 'a', value: 1 },
//     { key: 'b', value: 2 },
//     { key: 'a', value: 3 },  // duplicate 'key'
//     { key: 'c', value: 1 },
//     { key: 'b', value: 5 },  // duplicate 'key'
//   ];
//   const unique = []
//   for(let i = 0 ; i < data.length ; i++){
//       let flag = true
//       for(let j=0 ; j< unique.length ; j++){
//           if(data[i].key === unique[j].key || data[i].value === unique[j].value ){
//               flag = false;
//               ''
//               break
//           }
//       }
//       if(flag){
//       unique.push(data[i]) ;
//       }
//   }
  
//   console.log(unique)
  
  
  
  



// ----------------------- Reduce (categorise values)-----------------------
// const items = [
//     { key: 'a', category: 'fruit' },
//     { key: 'b', category: 'vegetable' },
//     { key: 'c', category: 'fruit' },
//     { key: 'd', category: 'dairy' },
//     { key: 'e', category: 'vegetable' },
//   ];
  
//   const data = items.reduce((acc, item)=>{
//       if(!acc[item.category]){
//           acc[item.category] = []
//       }
//       acc[item.category].push(item)
//      return acc 
//   },{})
  
//   console.log('data->', data)
  


// ------------------Unique no array by deleting that no ---------------
// const arr = [1, 2, 2, 3, 4, 4, 5]
// const seen ={}
// for(let i = 0 ; i < arr.length ;i++){
//     if(!seen[arr[i]]){
//         seen[arr[i]] = true;
//     }else{
//         for(let j = i ; j < arr.length -1 ; j++){
//             arr[j] = arr[j+1] 
//         }
//         arr.length = arr.length -1
//     }
    
// }

// console.log(arr)

