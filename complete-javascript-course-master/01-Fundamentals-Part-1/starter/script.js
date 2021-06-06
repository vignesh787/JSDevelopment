// Conditional operator

const age = 15;

age >= 18 ? console.log(' I like to drive car :) ') : console.log(' I like to ride cycle');

const drink = age>18 ? 'wine' : 'water';
//console.log(drink);

//console.log(`i like to drink ${age > 18?'wine':'water'}`);

//template literal can only have expression and never a statement.

//console.log(` I am ${2021-1987} years old`);
//expressions have return value ; statements do not have

//switch statements
/*
const day  = 'friday';

switch(day) {
    case 'monday': //day==='monday'
        console.log('Plan Course Structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare Theory Videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write Code Examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the Weekendoff');
        break;
    default:
        console.log('This is not a valid day');
}

//const day='monday'

if(day==='monday'){
    console.log('Plan Course Structure');
    console.log('Go to coding meetup');
    
}else if (day ==='tuesday'){
    console.log('Prepare Theory Videos');
     
}else if(day === 'wednesday' || day ==='thursday'){
    console.log("Write Code Examples")
} else if (day ==='friday'){
    console.log('Record Videos');
}else if (day ==='saturday' || day ==='sunday'){
    console.log('Enjoy the Weekendoff');

}else {
    console.log('This is not a valid day')
}

*/
// Boolean Operators - AND , OR and NOT Operators
/*
const hasDriverLicense=true; //A
const hasGoodVision=true; //B
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision);
const isTierd = false ; //C
const shouldDrive = hasDriverLicense && hasGoodVision;

if(hasDriverLicense  && hasGoodVision && !isTierd) console.log('Vignesh can drive');
else console.log(' Some one else has to drive');
*/

/*

//Equality Operators

const age = 18;
if(age === 18){
    console.log('The person has turned 18! Strict');
}
if(age == '18'){
    console.log('The person has turned 18! Loose');
}

//=== strict equality operator
//== loose equality operator- does type co-ersion

const favorite = Number(prompt("Whats your favorite Number ? "));
console.log(favorite,typeof(favorite));
if(favorite===23){
    console.log(favorite+ ' is an amazing number');
} else if(favorite ===7){
    console.log(favorite + ' is also a cool number');
} else{
    console.log('Number is not 23 or 7');
}

if(favorite !== 23){
    console.log("why not 23? ");
}
*/
/*

// 5 falsy values : 0, '', undefined , null , NaN

// when converted to booean will turn false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Vignesh'));
console.log(Boolean({}));
console.log(Boolean(null));

//Javascript almost alwasys does typecoercion instead of explicit conversion 

const money=10;
if(money){ // 0 is converted to false
    console.log("Don't spend it all");
}else{
    console.log("You should get a job");
}

let height=0; // undefined as no value is assigned. 
if(height){ // undefined is converted to falsy value.
            // 0 is also a falsy value - which will get converted to false. so this corner case also to be handled
    console.log('YAY! Height is defined');
}else{
    console.log('Height is undefined');
}
*/
/*Type Conversion / Type co-ercion*/
/*
const inputYear='1991';
console.log(inputYear);
console.log(Number(inputYear) + 18);

/* NaN - is an invalid number when we try to perform operation which is not supported like converting a string to number 
const inputName ='Vignesh';
const age=34;
console.log(String(age),age);
console.log(Number(inputName));

console.log('I am '+ 34 + ' Years Old');
console.log('I am '+ String(34) + ' Years Old');

console.log('23'-'10'-3) // Strings are converted to number
console.log('23'+'10'+3) // numbers  are converted to strings on getting a plus operator
console.log('23'*'2');
console.log('23'/'2');

/* Guess the output
let n='1' + 1; // this is 11 not 2 as string concatenation
n= n - 1 ; //11-1
console.log(n) //1
*/


/*

console.log("Hello World");
console.log("I am going to rule the programming world!!!");
console.log(" Vignesh will be the best programmer of the Organization!!!! :)");

const age  = 15;

const isOldEnough = age>=18;

if(isOldEnough)
{
    console.log(` Age is greater than 18 - ${age}`);
}else{
    console.log(`Too Young . Wait another - ${18 - age} years :)`);
}
let century;
const birthYear = 2015;
if(birthYear <=2000){
     century= 20;
}else{
    century = 21;
}

console.log(`Person borh on ${century} th Century` )


*/






// JS String Template
/*
const firstName = 'Vignesh';
const job = 'Architect';
const birthYear = 1987;
const year = 2037;

const vignesh ="I'm " + firstName + ', a ' + (year - birthYear) +' years old ' + job + '!';

console.log(vignesh);

// Template literals to solve above problem

const vigneshnew = `I'm ${firstName} , a ${year - birthYear} years old ${job}`;

console.log(vigneshnew);

console.log(' String with \n multiple \n\ lines');

console.log(`String 
multiple 
lines`);
*/



/*
// Operator Precedence 
const now = 2037;

const ageVignesh = now-1987;
const ageVedhaanth = now-2015;

console.log(now-1987 > now - 2015);

console.log(25-10-5);

let x, y;
x = y = 25-10-5;

console.log({x,y});

console.log({ageVignesh,ageVedhaanth});

 let avgAge = (ageVignesh+ageVedhaanth)/2;
 console.log(avgAge);
 avgAge = ageVignesh+ageVedhaanth/2;
 console.log(avgAge);





//Operators

const now = 2037;

const ageVignesh = now-1987;
const ageVedhaanth = now-2015;
console.log({ageVignesh,ageVedhaanth});
console.log({ageVedhaanth});
console.log(ageVedhaanth*2 , ageVignesh/2 , 3**7);

console.log('Vignesh',34 , 3**4);

const firstName = "Vignesh";
const lastName = "Ramesh";
console.log(firstName+ ' '+ lastName);

let x = 10 + 5;
console.log(x);
x+=10
console.log(x);
x*=4;
x++;
x--;
console.log(x);

console.log(ageVignesh > ageVedhaanth);
console.log(ageVignesh < ageVedhaanth);
console.log(ageVignesh === ageVedhaanth+28);


let age = 30; // when it can change later

age = 31;

const birthYear = 1987;

console.log({birthYear});
console.log(typeof(birthYear));

var job ='programmer';

job = 'architect';

console.log({job});

lastName = "lastname";
console.log({lastName});

let js = 'amazing';

console.log(1987 + 07 + 04);

var firstName = "Vignesh";
console.log({firstName});

let vignesh_ramesh  = "RV";
console.log(vignesh_ramesh);

let PI=3.1415;
console.log({PI});*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof(javaScriptIsFun));
console.log(typeof(false));
console.log(typeof(23));
console.log(typeof("javaScriptIsFun"));

javaScriptIsFun = 'YES!!';

console.log(typeof(javaScriptIsFun));
console.log(javaScriptIsFun);

let year;
year = 1991;
console.log(year);
console.log(typeof(year));

console.log(typeof null);
*/