'use strict';
// 1)
console.log("Hi, my name is Patrick and I'm 25 years old");

// 2)
function createGreeting() {
    console.log("Hi, my name is Adam and I'm 20 years old"); 
}

createGreeting();

// 3)
function createGreeting() {
    return "Hi, my name is Adam and I'm 20 years old";
}

createGreeting();
const greeting1 = createGreeting();
console.log(greeting1);

// 4)
function createGreeting(name, age){ 
    return `Hi, my name is ${name} and I'm ${age} years old`;
  }

// 5)
function createGreeting(name, age){ 
    const yearOfBirth = 2019 - age;
    return `I was born in ${yearOfBirth}`;
}

// 6)
function getYearOfBirth(age){
    return 2019 - age;
  }

function createGreeting(name, age){
const yob = getYearOfBirth(age);
return `My ${name} is and I was born in ${yob}`;
}

// 7) part 1
function createGreeting(age){
    if (age < 0) 
        throw new Error("Age can not be negative");
    return `I was born in ${yob}`;
  }

  try {
    const greeting1 = createGreeting(25);
    console.log(greeting1);
  } catch(e) {
    console.error(e.message);
  }

// 7) part 2
function createGreeting(name, age){
    if (name === undefined || age === undefined) 
        throw new Error("Age can not be negative");
    return createGreeting(name, age);
  }
  
  try {
    const greeting1 = createGreeting('Patrick', 25);
    console.log(greeting1);
  } catch(e) {
    console.error(e.message);
  }

//8
function getYearOfBirth(age) {
    return 2019 - age;
  }

function yearOfBirth(name, age) {

    const yob = getYearOfBirth(age);

    if (typeof age !== 'number') 
        throw new TypeError('Age must be a number');
    return `My name is ${name}, I am ${age} years old and was 
            born in ${yob}`;
  }

  try {
    const greeting1 = createGreeting('Rich', 18);
    console.log(greeting1);
  } catch(e) {
    console.error(e.message);
  }