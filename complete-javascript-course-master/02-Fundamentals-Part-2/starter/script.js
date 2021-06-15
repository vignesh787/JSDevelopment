'use strict';
/*
let dice= Math.trunc(Math.random() * 6) + 1;

while(dice !=6){
    console.log(`You rolled a ${dice}`)
    dice= Math.trunc(Math.random() * 6) + 1;
    if( dice === 6) console.log('Loop is about to end...' );
}
*/

// for loops with arrays
/*
const vignesh = [
    'Vignesh',
     'Ramesh',
     2021-1987,
     'Full Stack Developer',
     ['Muhilan','Alagar','Siva'],
     true
];

const newArr = [];

for(let i = 0; i < vignesh.length ;i++){
    console.log(vignesh[i],typeof(vignesh[i]));
    newArr.push(typeof(vignesh[i]));
}

console.log(newArr);
*/


/*
const vignesh = {
    firstName: 'Vignesh',
    lastName: 'Ramesh',
    birthYear : 1987,
    hasDriversLicense : true,
    job: 'Full Stack Developer',
    friends : ['Muhilan','Alagar','Siva'],
    // calcAge: function(birthYear){
    //     return 2021-birthYear;
    // }

    // calcAge : function(){
    //    // console.log(this)
    //     return 2021- this.birthYear;
    // }

    calcAge : function () {
        this.age = 2021-this.birthYear;
        return this.age;
    },

    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()} - year old 
    ${vignesh.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's License`;
    }


};

console.log(vignesh.calcAge());
console.log(vignesh.age);
console.log(vignesh.age);
console.log(vignesh.age);

//"Vignesh is a 34-yeaar old teacher m and he has a/no driver licence. 

console.log(vignesh.getSummary());


console.log(vignesh['calcAge'](vignesh.birthYear));

*/




/*
// Jonas has 3 friends and his best friend is Muhilan 

const vignesh = {
    firstName: 'Vignesh',
    lastName: 'Ramesh',
    age: 2021-1987,
    job: 'Full Stack Developer',
    friends : ['Muhilan','Alagar','Siva']
};

console.log(`${vignesh.firstName} has ${vignesh.friends.length} and his best friend is  ${vignesh.friends[0]} `);
*/
// Object literal Syntax
/*
const vignesh = {
    firstName: 'Vignesh',
    lastName: 'Ramesh',
    age: 2021-1987,
    job: 'Full Stack Developer',
    friends : ['Muhilan','Alagar','Siva']
};

console.log(vignesh);
console.log(vignesh.firstName);
console.log(vignesh['lastName']);

const nameKey = 'Name';

console.log(vignesh['first' + nameKey]);
console.log(vignesh['last' + nameKey]);

const interestedin  = prompt('What do you want to know about Vignesh. Choose between firstName, lastName , age , job and friends');

console.log(interestedin);
//undefined is what we get when we try to access a property not defined .
console.log(vignesh.interestedin);

if(vignesh[interestedin]){
console.log(vignesh[interestedin]);
}else{
    console.log('Wrong request!. Choose between firstName, lastName , age , job and friends');
}

vignesh.location ='India';
vignesh['twitter'] ='vikki_vignesh87';

console.log(vignesh);

*/
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