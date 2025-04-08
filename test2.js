function arm(n) {
    const len = n.toString().length
    let sum = 0;
    // n = tempNo;
    for (let i of n.toString()) {
        let mul = Math.pow(i, len);
        sum = sum + mul;
    }
    console.log('sum-->', sum)
}
arm(153)

// let hii = 10
console.log(1023 % 10)

















