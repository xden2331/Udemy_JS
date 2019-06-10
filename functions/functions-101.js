// Function - input (arguments), code, output (return value)

let greetUser = function () {
    console.log("Welcome user!")
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

console.log(square(3))

// Challenge Area

// ConvertFarhrenheitToCelsius

// Call a couple of times (32 -> 0) ( 68 -> 20)

// print the converted values

let f2c = function (f) {
    return (f-32)*5/9
}

console.log(f2c(32))
console.log(f2c(68))