// Learned more about closures.

//Functions 

    // Function Statement

    //Function Expression

    //Function Declaration

    //Anonymous Function ---- A function without a name is called anonymous function.

    //Named Function Expression

    //Difference between Parameters and Arguments

    //First Class Function - Ability to be used like values or arguments. It is also called First class Citizens.

    //Arrow Function




    ////Event loop

    //Event Listeners

    

    //Trust issues with set time out.




    //map, filter and reduce:

    const users = [

        {firstName: "sajin", lastName: "paul", age: 26},
        {firstName: "donald", lastName: "duck", age: 50},
        {firstName: "sam", lastName: "harris", age: 75},
        {firstName: "chris", lastName: "john", age: 26},
    ]

    // Task 1 - list of full names:

    const output = users.map(x => x.firstName + " " + x.lastName);

    console.log(output);

    // second example

    const output1 = users.reduce(function (acc, curr){

        if (acc[curr.age]){

            acc[curr.age]= ++acc[curr.age];

        } else {

            acc[curr.age] = 1;
        }

        return acc;

    }, {});


    console.log(output1);

    //Third example

    const output2 = users.filter(x => x.age<30) .map((x) => x.firstName);


    console.log(output2);









