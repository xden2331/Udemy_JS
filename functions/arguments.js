// Multiple arguments

let add = function (a, b) {
    return a+b
}

let result = add(10, 1)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

result = getScoreText()
console.log(result)

let name = 'Vikran'
let age = 21
// Way better to read and change
console.log(`Hey, my name is ${name}! I am ${age} years old.`)

// Challenge area
let getTip = function (total, tipPercent = .2){
    let tips = total * tipPercent
    return `A ${tipPercent*100}% tip on $${total} would be $${tips}`
}

let tip = getTip(40, .25)
console.log(tip)