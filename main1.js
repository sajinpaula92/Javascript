// Chapter 11: Day 2 session 2: My first game:

//First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors?");

if (playGame) {

    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {

        let playerOne = playerChoice.trim().toLowerCase(); //.trim method trims the unwanted spaces.
        if (playerOne === "rock" || playerOne === "paper" || playerOne==="scissors") {

            let computerChoice = Math.floor(Math.random() *3+1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";

                let result = 
                playerOne === computer
                ? "Tie game!"
                :playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                :playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                :playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

            alert (result);
            let playAgain = confirm("play Again");
            playAgain ? location.reload() : alert("ok, thanks for playing ");

        } else {
            alert("You did not enter rock, paper, or scissors");
        }

    } else {

        alert("I guess you changed your mind. may be next time.");
    }
} else {
    alert("ok, may be next time.");

}




//Chapter :12 : Intro to Loops:

//1. while loop

let myNumber = 0;
while (myNumber < 50) {

    console.log(myNumber);
    myNumber++; //This increments the number by 1 every time.
}

// do not create an endless loop. This will crash the browser and the browser will shut down.

//Example 1

let myName ="sajin";
let counter = 0;
let myLetter;
while (true) {
    myLetter = myName[counter];
    console.log(myLetter);
    if (myLetter === "j") break; // this breaks when the condition is reached. Like break there is a continue property.
    counter++;
}



//2. do while loop

let myNewNumber = 0;
do {
    myNumber +=2;
    console.log(myNumber);
} while (myNumber < 50);

//3. For loop

for (let i = 0; i <=10; i++) {

    console.log(i);
}

//example 1

let name ="sajin";
for (let i =0; i < name.length; i++){

    console.log(name.charAt(i));
}





//Chapter :13 : Functions

//Methods are built in functions!

//function declaration syntax: ///   We can define functions if we are using soemthing repeatedly. Functions provide reusable code.

//Example 1

function sum() {

    return 2 + 2;
}

console.log(sum());

//Example 2

function sum(num1, num2) {

    return num1 + num2;
}

console.log(sum(2,6));

//Example 3 ///  This is used for generating username from email

function getUserNameFromEmail(email) {

    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));

// Arrow function

const getUserNameFromEmail1 =(email) => {

    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("john@SomeRandomEmail.com"));




//Chapter :14 : Scope

// var, let, and const. var was used up untill 2015. Now var has become legacy code. We no more use var, we use only let and const.

// const has the most preference. Const code cannot be renamed, but let can be renamed.

//global scope

var x=1;
let y=2;
const z =3;

//local scope

{
    let y=4;
}

//Function scope




//Chapter :15 : Arrays

//Array is something like a shelf which stores data

const myArray =[];

//add elements to an array

myArray[0] = "Sajin";
myArray[1] = "paul";
myArray[2] = 1001;
myArray[3] = false;

//refer to an array

console.log(myArray);

//length property

console.log(myArray.length);

//last element in an array

console.log(myArray[myArray.length -1]);

console.log(myArray[1]); // this number shows at the position what is there.

//how do we add more data to our array

myArray.push("school"); // this push property adds this value to the array.

console.log(myArray);

//how do we remove something from an array

myArray.pop(); // this pop property removes the last added value in an array.

console.log(myArray);


//how do we add something in the beginning of an array

myArray.unshift(55);  // this property adds the value in beginning of an array.

console.log(myArray);

//how do we remove something from the beginning of an array

myArray.shift(55);  // this property removes the value in beginning of an array.

console.log(myArray);

//how do we remove something from the middle of an array

myArray.splice(1,1);  // this property removes the value in middle of an array. we can use this splice property to replace the value as well.

console.log(myArray);

//how do we reverse an array

myArray.reverse();  // this property reverses an array.

console.log(myArray);

//we can use concat method to join two arrays.

//We can also use the spread operator(...) to join two arrays

//Nested arrays
 // we have single dimentional arrays and multi dimentional arrays.





 //Chapter :16 : Refactor the Game with arrays




 //Chapter 17: Objects

 //key-value pairs in curly braces.

 const myObj ={name: "sajin"};

 console.log(myObj);

 //Example

 const anotherObj ={

    alive:true,
    answer:42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "coffee",
        afternoon: "iced tea"
    }
 };

 console.log(anotherObj.alive);
 console.log(anotherObj.answer);
 console.log(anotherObj.hobbies[1]);
 console.log(anotherObj.beverage.afternoon);
 



