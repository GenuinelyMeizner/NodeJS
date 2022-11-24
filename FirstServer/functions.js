//Basic Function
function myName() {
    console.log('Frederik');
}
myName();

//Basic Function with Parameter
function nameMe(name) {
    console.log(`Your name is: ${name}`);
}
nameMe('Frederik');

//Basic Function with multiple Parameters
function multiply(x, y) {
    return x * y;
}
console.log(multiply(8, 4));

//Function Expression
const sum = function add(x, y) {
    return x + y;
}
console.log(sum(10, 5));

//Anonymous Function
const anonymousSum = function(x, y) {
    return x + y;
}
console.log(anonymousSum(10, 5));

//Arrow Function
const arrowMultiply = (x, y) => {
    return x * y;
}
console.log(arrowMultiply(2, 2));

//Compact Arrow Function - Implicit Return
const compactArrowMultiply = (x, y) => x * y;
console.log(compactArrowMultiply(2, 2));

//Lexical Scope Demonstration
const animalList = {
    intro: 'The animal is a:',
    animals: ['deer', 'wolf', 'moose', 'bear'],

    //Traditional Function - Properties locked behind function scope
    printAnimals() {
        this.animals.forEach(function (animal) {
            console.log(this.intro, animal);
        })
    },

    //Arrow Function - Due to lexical scope the arrow functions 'this' has access to the objects properties
    printAnimalsArrow() {
        this.animals.forEach((animal) => {
            console.log(this.intro, animal);
        })
    },
}

animalList.printAnimals();
animalList.printAnimalsArrow();