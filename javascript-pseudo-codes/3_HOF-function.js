// Higher Order Function:
// A Higher-Order Function is a function that does at least one of the following:
// 1. Takes another function as an argument.
// OR
// 2. Returns a function as its result.
// Ex: map, filter, reduce, forEach also are higher order function bcoz they take anonymous function

// Takes another function as an argument.
function greet(name) {
    return `Helloo ${name}`
}

function HOF(fn, name) {  // this is HOF
    return fn(name).toUpperCase()
}

console.log(HOF(greet, 'ram'))
// Returns a function as its result.
function outerFunc(x) {
    function InnerFunc(y) {
        return x + y;
    }
    return InnerFunc
}

const hello = outerFunc(5)
console.log(hello)


