// Lecture variable declaration in let and const


//ES5

/*var name5 ='Jane smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6

const name6 = 'Jane smith';
let age6 = 23;

age6 = 50;
console.log(age6);

// Es5

function driversLicence(passedTest){

    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + yearOfBirth);
}

driversLicence(true);

// ES6

function driversLicence6(passedTest){

    let firstName;
    const yearOfBirth = 1990;

    if(passedTest){
        firstName = 'John';
        // const yearOfBirth = 1990;
    }

    console.log(firstName + yearOfBirth);
}

driversLicence6(true);


let i = 23;

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);
*/

// Lecture Blocks and IIFEs

/*{
    const a = 1;
    let b = 2;
    var c = 5;
}

console.log(c);

//ES5

(function(){
    var a = 5;
    var b = 10;
})();


console.log(a + b);*/

// Lecture: Strings

/*let firstName = 'Fareedat';
let lastName = 'Bello';
const yearOfBirth = 1997;

function calcAge(year){
    return 2019 - year;
}*/



//Es5 has stupid plus signs you need to add when consoling string literals together

// Es6 is so much better with string literals

/*console.log(`This is ${firstName} ${lastName}. She was born in ${yearOfBirth}. Today she is ${calcAge(yearOfBirth)} years old.`);



// String methods

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('F'));
console.log(n.endsWith('o'));
console.log(n.includes('reed'));
console.log(`${firstName} `.repeat(5));*/

// Arrow Functions

// const years = [1990, 1996, 1982, 1937];

// // ES5

// var ages5 = years.map(function(el) {
//     return 2019 - el;
// });

// console.log(ages5);

// // ES6

// let ages6 = years.map(el => 2019 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();

//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });

// console.log(ages6)


// // ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {

//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + self.color;

//             alert(str);
//         });
//     }
// }

// box5.clickMe();



// ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + this.color;

//             alert(str);
//         });
//     }
// }

// box6.clickMe();


//  function Person(name){
//      this.name = name;
//  }


//  Person.prototype.myFriends5 = function(friends) {
//      var arr = friends.map(function(el){
//          return this.name + ' is friends with ' + el;
//      }.bind(this));

//      console.log(arr);
//  }

// var friends = ['Bob', 'Deb', 'Cystal'];
//  new Person('John').myFriends5(friends);

//  new Person('Fareedat').myFriends5(friends);


// // ES6

// Person.prototype.myFriends6 = function(friends) {
//     let arr = friends.map(el => 
//          `${this.name}  is friends with  ${el}`);

//     console.log(arr);
// }

// var friends = ['Bob', 'Deb', 'Cystal'];
// new Person('Debbie').myFriends6(friends);

// new Person('Rheedhar').myFriends6(friends);



//Lecture: Destructuring
// Extracting data

//ES5
//var john = ['john', 26];
//var name = john[0];
//var age = john[1];

//ES6

// const [name, age] = ['John', 26];
// console.log(name, age);

// const obj = {
//     firstName: 'Fareedat',
//     lastName: 'Bello'
// }

// const {firstName, lastName} = obj;

// console.log(firstName);


// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;

//     return [age, 65-age];


// }

// const [age2, retirement] = calcAgeRetirement(1997);

// console.log(age2, retirement)


/*Arrays in ES6 */


//const boxes = document.querySelectorAll('.box');

//ES5

/*var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/

//ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue';
}*/

/*const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



for(const cur of boxesArr6) {
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue';
}

// es5

var ages =[11, 12, 45, 23, 45];

var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);

// es6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));*/


// Lecture : Spread Operator
/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges (18, 40, 30, 20);

console.log(sum1);


//ES5

var ages = [18, 40, 30, 20];

var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

//ES6

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Tunde', 'Femi', 'Kayra'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxess = document.querySelectorAll('.box');
 
const all = [h, ...boxess];

Array.from(all).forEach(cur => cur.style.color = 'purple');*/


// Lecture: Rest Parameters

//ES5

/*function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear - cur) >= 18);
    })
}

//isFullAge5(1990, 1891, 1990);

//ES6

 function isFullAge6(...years) {
     years.forEach(cur => console.log((new Date().getFullYear - cur) >= 18 ));
 }

 isFullAge6(1990, 1891, 1990);*/

 /*function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2019 - cur) >= limit);
    })
}

isFullAge5(21, 1997, 1891, 1990);

//ES6

function isFullAge6(limit, ...years) {
     years.forEach(cur => console.log((2019 - cur) >= limit ));
 }

 isFullAge6(21, 2005, 1891, 1990);*/

//  Lecture: Default Parameters

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith': lastName = lastName;

    nationality === undefined ? nationality = 'Nigerian': nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var Fareedat = new SmithPerson('Fareedat', 1997, 'Bello', 'American');*/



// ES6

/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Bello', nationality = 'Nigerian'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;   
}


var john = new SmithPerson('John', 1990);
var Fareedat = new SmithPerson('Fareedat', 1997, 'Bello', 'American');
*/

// Lecture: Maps

/*const question = new Map();

question.set('question', 'What is the official name of the latest major javascript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES15');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer bitch!');

console.log(question.get('question'));

console.log(question.size);



if(question.has(4)){
    console.log('hello');
}

/*question.forEach((value, key) => console.log(`This is ${key}, and its has a value of ${value}`));*/


/*for (let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`
        Answer ${key}: ${value}`);
    }
}


const answer = parseInt(prompt('Write the correct answer'));

console.log(question.get(answer === question.get('correct')));

// Why maps are better than objects

//you can use anything as keys
// ypu can iteriate which makes mainpualtion better
// you can get the size easily

// you can easily add and remove data easily*/



// Lecture: Classes;

/*var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = 2019 - this.yearOfBirth;

    console.log(age);
}

var john5 = new Person5('John', 1997, 'teacher');

john5.calculateAge();

//ES6


class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = 2019 - this.yearOfBirth;
        console.log(age);
    }
}


const john6 = new Person6('John', 1997, 'teacher');

john6.calculateAge()*/

// Lecture: Inheritance between classes using sub classes

/*var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;

    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}



Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var john = new Athlete5('John', 1990, 'swimmer', 3, 10);

john.calculateAge();
john.wonMedal();

// ES6


class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete = new Athlete6('John', 1990, 'Swimmer', 3, 10);

johnAthlete.wonMedal();
johnAthlete.calculateAge();*/


// Coding challenge 8

class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, numberTrees, parkArea){
        super(name, buildYear);
        this.numberTrees = numberTrees;
        this.parkArea = parkArea;
    }

    treeDensity(){
        let treeDen = this.numberTrees / this.parkArea;
        console.log(`${this.name} has a tree density of ${treeDen} per square km`); 
    }


}

class Street extends Element{
    constructor(name, buildYear, realLength, size = 3){
        super(name, buildYear);
        this.realLength = realLength;
        this.size = size;
    }

    sizeClass(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'large');
        classification.set(5, 'huge');

        console.log(`${this.name} built in ${this.buildYear} is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Park1', 1990, 3000, 5), new Park('Park2', 1997, 200, 15),new Park('Park3', 1993, 500, 10)]

const allStreets = [new Street('Street1', 1998, 250, 2), new Street('Street2', 1897, 300), new Street('Street3', 2001, 150, 4), new Street('Street4', 2005, 350) ]


    function calc(arr){
        const sum = arr.reduce((pre, current, index) => pre + current, 0);
        return [sum, sum / arr.length];
    }
    

   
    

const parkReport = function(p) {
    console.log("/***Park Reports***/");

    //Tree Density;
    p.forEach(cur => cur.treeDensity());

    //Averageage
    const ages = p.map(cur => new Date().getFullYear() - cur.buildYear);
    const[totalAge, averageAge] = calc(ages)
    console.log(`Our ${p.length} parks have an average age of ${averageAge} years`);
     

    //More than 1000

    const num = p.map(cur => cur.numberTrees).findIndex(cur => cur >= 1000);
    console.log(`${p[num].name} has more than 1000 trees`);

}

const streetReport = function(s) {
    console.log("/***Streets report***/");

    // Total and average length of streets
    const [totalLength, averageLength] = calc(s.map(cur => cur.realLength));
    console.log(`Our ${s.realLength} have a total length of ${totalLength} and an average length of ${averageLength}`);

    //Classification
        s.forEach(cur => cur.sizeClass());


}

parkReport(allParks);
streetReport(allStreets);





















