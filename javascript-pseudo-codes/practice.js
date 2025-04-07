function isPrime(no) {
    console.log(no);
    if (no == 2) return no;
    
    // let x = isPrime(no - 1)
    // console.log(x)   
    if (no % isPrime(no - 1) === 0)
        return false
    else {
        return true;
    }
}
console.log(isPrime(6))
// isPrime(7)