'use strict';



/*

const friends = ['Muhilan','Alagar','Ranjith'];

// add elements to last 
const newlength = friends.push('Gopi Sivanesan');

console.log(friends,newlength);
// add elements to first
friends.unshift('Raja');

console.log(friends);

// remove elements from last by default 

const popped = friends.pop();
console.log(popped);
console.log(friends);

// remove first element from the array 

friends.shift();
console.log(friends);

// array search 
console.log(friends.indexOf('Muhilan'));

console.log(friends.indexOf('Muhilan4'));

// ES6 method for searching element in the array  with strict equality
console.log(friends.includes('Muhilan'))

console.log(friends.includes('Muhilan123'))

if(friends.includes('Muhilan')){
    console.log('You have a friend called Muhilan');
}
*/
/*
//Exercise

const calcage = function(birthyear){
    return 2021-birthyear;
}

const years = new Array(1956,1964,1987,1988,2015);

for (let i=0;i<years.length;i++){
    console.log('Current Age : '+calcage(years[i]) + ' birth year : '+years[i]);
}


const friend1 = 'Muhilan';
const friend2 = 'Alagar';
const friend3 = 'Ranjith';

const friends = ['Muhilan','Alagar','Ranjith'];

console.log(friends);
console.log(friends[0],friends[1]);
console.log(friends.length);
console.log(friends[friends.length-1])

friends[3]='Vikash';

console.log(friends);

//const years = new Array(1956,1964,1987,1988,2015);

console.log(years);
*/

// calling a function from another function
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples , oranges ){
    const applePieces  = cutFruitPieces(apples);
    const orangePieces  = cutFruitPieces(oranges);
    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of  oranges`;
    return juice; 
   }

console.log(fruitProcessor(2,3));

*/


/*

const yearsUntilRetirement = (birthYear , firstName )=> {
    const age = 2021 - birthYear;
  //  console.log(age);
    const retirement = 65 - age ;
    return `${firstName} retires in ${retirement} years` ;
}

console.log(yearsUntilRetirement(1987,'Vignesh'));
console.log(yearsUntilRetirement(1988,'Harini'));
*/
// Arrow Functions
const calcAge3 = birthYear => 2021 - birthYear;
//console.log(calcAge3(2015));

/*

// Function Declaration 
function calcAge1(birthYear){
    const age  = 2021 - birthYear;
    return age;
}

console.log(calcAge1(2015));
// Function Expression 
const calcAge2 = function (birthYear){
    return 2021 - birthYear;
}

console.log(calcAge2(2015));
*/
/*
function fruitProcessor(apples , oranges ){
 console.log(apples, oranges);
 const juice = `Juice with ${apples} apples and ${oranges} oranges`;
 return juice; 
}

console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

*/

/*
function logger(){
    console.log('My name is Vignesh ');
}

logger(); //invoking / running / calling a funtion
logger();
logger();

let hasDriversLicense = false;
const passTest = true;

if(passTest){
     hasDriversLicense=true;
}

if(hasDriversLicense) console.log(' I can drive');
*/