const str = 'This is my kingdom come'

let myArr = str.split(' ').forEach((item, index, arr) => {
    return arr[index] = item.charAt(0).toUpperCase() + item.slice(1)
})

console.log( myArr)

// console.log(hello.join(' '))