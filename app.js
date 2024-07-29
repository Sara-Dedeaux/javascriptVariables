//DECLARE VARIABLES
var hello = "world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null; 

//CHANGE VARIABLE DATA- DATA-TYPE CAN BE CHANGED AS WELL 
num=29;
num="17"; 


//WRTIE TO CONSOLE
console.log(5);
console.log("World");
console.log(hello);
console.log(num);
console.log(bool);
console.log(undef);
console.log(none);


//MATH VARIABLES 
var foo; 
foo=19;
console.log(foo + 4);

var textOne="Hello";
console.log(textOne+" World!");


//FIRST EXERCISE - TEMP. CONVERTER -- CONVERT FARENHEIT TO CELSUIS 

//DECLARE VARIABLES
var fah;
var cel=0;

//CALCULATIONS
fah=cel * 9/5 + 32;

//WRITE TO CONSOLE
console.log(fah);


//SECOND EXERCISE - AGE CALCULATOR -- SUBTRACT BIRTH YEAR FROM CURRENT YEAR TO GET AGE

//DECLARE VARIABLES
var currYear=2024;
var birthYear=1989;
var age;

//CALCULATIONS
age= currYear-birthYear;

//WRITE TO CONSOLE
console.log(age);


//INTRO TO CONST (CONSTANTS)-- IMMUTABLE

//DECLARE CONST 
const bar = "You can not change me!";

// //ATTEMPT TO CHANGE CONST
// bar=8;

//WRITE TO CONSOLE
console.log(bar);


//INTRO TO LET -- ACCESSIBLE BASED ON SCOPE

//DECLARE LET VARIABLE
let bar2= "You can change me!";

//CHANGE LET VARIABLE
bar2=10;

//WRITE TO CONSOLE
console.log(bar2);


//ADDRESSING QUOTATION MARKS INSIDE A STRING 

//DOUBLE QUOTES OUTSIDE SINGLE QUOTE INSIDE
let stringQuote= "You aren't special";
console.log(stringQuote);

//FORWARD SLASH FOR ESCAPE KEY
let escapeQuote= 'You aren\'t special';
console.log(escapeQuote);


//ITERATING NUMBERS INCREMENT AND DECREMENT

//DECLARE VARIABLE 
let num3=0;
console.log(num3);

//ITERATE UP - INCREMENT
num3++;
console.log(num3);

//ITERATE DOWN - DECREMENT
num3--;
console.log(num3);


//TEMPLATE LITERALS- USE BUTTON ABOVE TAB TO NEST STRING-- NOT QUOTATION MARKS--
console.log(`Hello Baz2 ${num3}`);


//THIRD EXERCISE - PERSONAL GREETING
    //INPUT THE USER'S NAME
    //PERSONALIZED GREETING MESSAGE

//DECLARE VARIABLES
let greeting="Good Afternoon,";
let name1="Sara";
let nameGreet;

//CALCULATIONS
nameGreet= greeting + name1

//WRITE TO CONSOLE
console.log(nameGreet);


//FOURTH EXERCISE - TIP CALCULATOR
    //INPUT THE USER'S BILL AMOUNT AND THE TIP PERCENTAGE
    //CALCULATE THE TIP AMOUNT AND CONSOLE THE TOTAL BILL.

//DECLARE VARIABLES
let userBill=25.00;
let tipPerc=.25;
let tipTotal; 
let totalCost;

//CALCULATIONS

//TIP calculation
tipTotal= userBill*tipPerc;

//TOTAL calculation
totalCost=tipTotal+userBill;

//WRITE TO CONSOLE
//variable add .toFixed(2) -- used to round variable tWo decimal places
console.log(`$${totalCost.toFixed(2)}`);


//FIFTH EXERCISE - AGE CALCULATOR IN DAYS
    //ASK THE USER TO INPUT THEIR AGE IN YEARS.
    //MULTIPLY THE AGE IN YEARS BY 365

//DECLARE VARIABLES
let userAge=10;
let ageInDays;

//CALCULATIONS
ageInDays=userAge*365;

//WRITE TO CONSOLE
console.log(` A person ${userAge} year(s) old is ${ageInDays} days old.`);






