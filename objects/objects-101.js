let myBook = {
    // values
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)

myBook.title = 'Animal Farm'

console.log(myBook)

// Challenge area

// name, age, location
let aPerson = {
    name: 'Richard',
    age: 21,
    location: 'Canterbury'
}

let info = `${aPerson.name} is ${aPerson.age} and lives in ${aPerson.location}.`
console.log(info)
aPerson.age += 1
info = `${aPerson.name} is ${aPerson.age} and lives in ${aPerson.location}.`
console.log(info)