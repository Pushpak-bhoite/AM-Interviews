function outer() {
    let x = 0;
    function inner() {
        x++
        console.log(x)
    }

    return inner
}
const hello = outer()
hello()


