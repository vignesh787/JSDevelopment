'use strict';


const yearsUntilRetirement = (birthYear , firstName )=> {
    const age = 2021 - birthYear;
  //  console.log(age);
    const retirement = 65 - age ;
    return `${firstName} retires in ${retirement} years` ;
}

console.log(yearsUntilRetirement(1987,'Vignesh'));
console.log(yearsUntilRetirement(1988,'Harini'));

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