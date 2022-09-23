alert('Ola Mundo!!!')

console.log('Hello World!!!')

var studentName1 = "Rodrigo"
let studentName2 = 'Maria'
const studentName3 = 'José'

console.log(studentName1)
console.log(studentName2)
console.log(studentName3)

studentName2 = 10
console.log(studentName2)

studentName2 = true
console.log(studentName2)

let student = {
    name: 'Rodrigo',
    age: 35,
    email: 'rodrigolfsi@gmail.com'
}
console.log(student)
console.log(student.name)

let age = 15

if (age > 18) {
    console.log('Você é obrigado a votar')
} else {
    console.log('Você não pode votar ainda :( ')
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 0
while (i < 10) {
    console.log(i)
    i++
}

do {
    i--
    console.log(i)
} while (i > 0)

function printSomething() {
    console.log('hello!!!')
}

printSomething()

const printSomething2 = () => {
    console.log('hello 2!!!')
}

printSomething2()

function soma(a, b) {
    console.log('resultado: ' + (a + b))
}

soma(10, 9)

const soma2 = (a, b) => {
    console.log('resultado 2: ' + (a + b))
}

soma2(20, 40)

function addSufix(value) {
    return value + 'ing'
}

const word1 = addSufix('run')
console.log(word1)

const addSufix2 = value => value + 'ing'
const word2 = addSufix2('speak')
console.log(word2)

let university = null
if (university) {
    console.log(university)
} else {
    console.log('variavel é null')
}

console.log('Olha o resultado: ' + word2)
console.log(`Olha o resultado: ${word2}`)

age = 5

let result2 = age >= 18 ? 'você pode votar' : 'você não pode votar'
console.log(`Resultado::: ${result2}`)
