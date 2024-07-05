//Day 3 session 2

//Objects

//key-value pairs in curly braces

/*const band = {

    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(object.keys(band));
console.log(object.values(band));*/




//Chapter 18- Classes: 

//Javascript Classes

class Pizza /* this is parent class*/ {

    constructor(pizzaType) {
        this.type =pizzaType;
        this.size ="medium";
        this.crust ="original";
    } 

    bake () {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    }
}

const mypizza =new Pizza("pepperoni");
mypizza.bake();

class SpecilaityPizza extends Pizza /*this is child class, with extends keyword*/ {

    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }

    slice(){

        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}



//Chapter 19- JSON-- Javascript Object Notation

//Json is used to send and receive data.

//sendjson with stringify

//receive json with parse



//Chapter 20- Errors

//Javascript Errors and error handling





// Chapter 21- DOM - Document Object Model

//getElementByClassName
//getEleemntByTagName
//querySelector
//querySelectorAll

//Navigating through DOM Trees





// Chapter 22- Event Listeners

//have to study this chapter again.



// Chapter 23- Web Storage

//web storage API

//have to study this chapter again.





