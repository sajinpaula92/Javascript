// chapter 3 - Strings:

// When we use let keyword for defining a variable it can be reassigned with another value, but we can use a const keyword for not changing the values.

const myVariable = "Mathematics";

// The length property:

// The length property uses dot(.) notation.

console.log(myVariable.length); // The length property refers to the number of characters in the string.

// The same works for a sentence as well.

console.log("Every good boy does fine.length");

//String Methods:

//1. charAt()

console.log(myVariable.charAt(5)); // This shows the character wchih is at this particular postion, for eg. here it is the 5 th letter in the sentence. Position count starts at 0 instead of 1.

//2.indexOf()

console.log(myVariable.indexOf("mat")); // This shows from where this particular characters start.

//3.lastIndexOf()

console.log(myVariable.lastIndexOf("at"));// This shows where this particular characters are there from the last.

//4.Slice

console.log(myVariable.slice(5,8)); // This returns characters from the number 5 to number 8. If there is only one number provided the method starts the characters from the number provided to the end.

//5. Touppercase & Tolowercase

console.log(myVariable.toUpperCase()); // Eventhough we did not give any number inside the paranthesis we should give it. To uppercase changes teh sentence or the words to uppercase and the lowercase changes all the letters and words to lowercase characters.

//6. includes

console.log(myVariable.includes("div")); // The includes method shows the boolean data. THis shows whether this particular letters are inlcuded in the variable.

//7. split

console.log(myVariable.split("e")); //The split mathod splits the words into two and forms as an array. It omits the particular letter we have given. If we give  empty quotes this splits all the characters seperately as a string.



// chapter 4 - Numbers:

const myNumber = 42;

//An integer is a whole number. //A number with a decimal is a float.

const myFloat = 42.02;

const myString = "42"; //This is shown in white color instead of a purple color, it is because it is a string.

console.log(myString);

//We can change a string value with this option below.

console.log(Number(myString)); //Now this turns into purple color and it is changed to a number value.

//Now if we compare this converted data with the number variable it will be true.

console.log(Number(myString)=== myNumber); // The answer is true.

//If we try to convert a non number data to a number data it will show NaN which stands for Not a Number.

console.log(Number("Paul")); // The answer is Nan. This can easily happen with string data or undefined data.

//Boolean data returns a vkue of 1 f0r true and 0 for false.

console.log(Number(false)); // The answer is 0. 

// Number Methods:

//1. isInteger method

console.log(Number.isInteger(myNumber)); //It says true or false.

//2.parseFloat method

console.log(Number.parseFloat(myString));

//3. toFixed method

console.log(Number.parseFloat(myString).toFixed(3)); // the to fixed method shows how many decimal points after a dot.

//4. parseInt method

console.log(Number.parseInt(myFloat));

//5. toString method

console.log(typeof myFloat.toString());

//6. Chaining method

console.log(Number.parseFloat("4.237abc").toFixed(2).toString()); //Using several methods chained together is called chaining.

//Number.isNan method. This methiod determines whether the passed value is NaN AND its type is Number.

console.log(isNaN("Sajin"));



// chapter 5 - Math Methods and Properties:

console.log(Math.PI); // This value returns the value of pi.

// Math Methods:

//1. trunc method

console.log(Math.trunc(Math.PI)); // This method truncates the value of pi and gives it as an integer.

//2. round Method

console.log(Math.round(Math.PI)); // This method rounds the value of pi to the nearest integer.

//3. ceil Method

console.log(Math.ceil(Math.PI)); //This method rounds the value of pi to next integer.

//4. Floor Method

console.log(Math.floor(Math.PI)); //This method rounds the value of pi down to the next lowest integer.

//5. pow Method

console.log(Math.pow(2, 4)); //This method calculates the first number to the power of the next number. for eg. here 2 to the power of 4 and so on.

// 6. min Method

console.log(Math.min(2,4,16,10, 0.5)); //This method shows the smallest number.

//7. max Method

console.log(Math.max(2,4,16,10, 0.5)); //This method shows the largest number.

//8. random Method

console.log(Math.random()); //This method shows random numbers from 0 to 1.

console.log(Math.random()); //This method shows random numbers from 0 to 1.


//Example -JS expression using random method:

console.log(Math.floor(Math.random()*10)+1); // If we do not add 1 here, we will get only the values from 0 to 9.
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// You should choose the floor method instead of a ceil method for generating random numbers, because ceil method can have zero.





// chapter 6 - Code Challenge:

// Write code that will return a random letter from your name

console.log(typeof "Sajin");

console.log("Sajin".charAt());

console.log(Math.floor(Math.random()*5)+1);

console.log("Sajin".charAt(Math.floor(Math.random()*5)));
console.log("Sajin".charAt(Math.floor(Math.random()*5)));
console.log("Sajin".charAt(Math.floor(Math.random()*5)));
console.log("Sajin".charAt(Math.floor(Math.random()*5)));
console.log("Sajin".charAt(Math.floor(Math.random()*5)));

const anyName = "Jonathan";

console.log(anyName.charAt(Math.floor(Math.random()*anyName.length))); // This works for any names.





// chapter 7 - IF Statements:

// if statements are conditionals in programmming.

// Basic syntax of an IF statement.

if (condition) {

    //run some code
} else {

    //run some different code
}

//Example

let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;

if (customerIsBanned) {

    reply = `No soup for you`;
}

if (soup) {

    reply = `Here is your order of ${soup}`;
} else {

    reply=`Sorry, We are out of ${soup}`;
}

console.log(reply);


// Next example test scores:

let testScore =89;

let collegeStudent = true;
let grade;

if (testScore >=90) {

    grade ="A";
} else if (testScore >=80) {

    grade ="B";
} else if (testScore >=70) {

    grade ="C";
} else if (testScore >=60) {

    grade ="D";
} else {

    // Nested if statement
    if(collegeStudent) {

        grade ="U";
    } else if (collegeStudent) {

        grade ="F";
    }
}

console.log(grade);


// Day 2 - Conditionals: If statements** continuing:

//Decision tree!
if (playerOne === computer)  {

    //tie game
} else if (playerOne === "rock") {

    if (computer === "paper") {

        // computer wins
    } else {

        //playerOne wins
    }
} else if (playerOne === "paper") {

    if (computer === "scissors") {

        // computer wins
    } else {

        //playerOne wins
    }

} else if (playerOne === "scissors") {

    if (computer === "rock") {

        // computer wins
    } else {

        //playerOne wins
    }

}




// chapter 8 - Switch Statements:

// Conditionals: Switch Statements

//Syntax

switch //(//expression (Or) value) {

    //case choice1:

        //run this code
        //break;

    //case choice2:

        //run this different code
       // break;

        //add as manay cases as nedded.

    //default:
        //run this code if no case matches
        //ne need for a break here.

//}



// Example 1

switch ("2") { // this will not match becuase it is a numerical data inside a string. Switch statements always need to match. But if we give the value as 1 or 2 without quotes it will match. 

    case choice1:


        console.log("1");
        break;

    case choice2:

        console.log("2");
        break;

    case choice3:

        console.log("3");
        break;

    default:
        console.log("No Match");

}


// Example 2


switch (Math.floor(Math.random()*5+1)) { 

    case choice1:


        console.log("1");
        break;

    case choice2:

        console.log("2");
        break;

    case choice3:

        console.log("3");
        break;

    default:
        console.log("No Match");

}



// chapter 9 - Ternary Operator:

//Conditionals: Ternary Operator

//syntax
//condition? ifTrue : ifFalse;


// Example 1

let soup = "Chicken Noodle soup";
let response = soup ? "Yes, we have soup" : "Sorry, no soup today.";

console.log(response);

// Example 2

let testScore =79;

let myGrade = testScore > 89 ? "A"
: testScore >79 ? "B"
: testScore >69 ? "C"
: testScore >59 ? "D"
: "F";

console.log (`My test grade is a ${myGrade}.`);





// chapter 10 - User input:

//alert
alert("Hello world!");

//confirm

confirm("ok === True\nCancel === False");

//prompt

let name = prompt("Please enter your name.")
console.log(name);





