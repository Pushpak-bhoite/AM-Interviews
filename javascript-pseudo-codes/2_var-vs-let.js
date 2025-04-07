// var has function scope & on the second hand let has block scope

function hello() {
    if (true) {
        var x = 10
    }
    console.log(x)
}

console.log(hello())