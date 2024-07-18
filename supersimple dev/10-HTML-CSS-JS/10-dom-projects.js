String(25) //This built in string function converts a value into a string. This is opposite to the number function in line number 55.
        console.log('25' - 5);


        // Next object we are looking at is window.

        //document object represents only teh document but the window represents the whole browser. And so the document object is inside the window object.

        //Every function and codes contsins window object in the beginning as default but we do not type it. Check examples below.

        window.console.log('window'); //here we have added window object, but as deafult window object is laready there in every code but not seen. 
        

        function handleCostKeydown(event) {
            if (event.key === 'Enter') {

                calculateTotal();
        }

        }

        function calculateTotal() {

            const inputElement = document.querySelector('.js-cost-input');
                let cost = Number(inputElement.value); //This number method converts the string value to the number first.
                console.log(cost);
                console.log(typeof cost);

                if(cost <= 40) {

                    cost = cost + 10; // This is called type coertion. string + number converts the value to string. Inorder to get rid of this we need to add a method called number. check line number 45.
                    console.log(cost);
                }

            document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
        }


        function subscribe() {

                const buttonElement = document.querySelector('.js-subscribe-button');

                if (buttonElement.innerText === 'Subscribe') { // Here instead of inner text we can use innerHTML also, but when we use inner HTMl be careful that there is no space.

                    buttonElement.innerHTML = 'Subscribed';
                    buttonElement.classList.add('is-subscribed');  // Class list is an object where we can have different classes added to the code. We dont have to add .(dot ) when creating a class here. We add .(dot) only on query selector.
                } else {

                    buttonElement.innerHTML = 'Subscribe';
                    buttonElement.classList.remove('is-subscribed');  // This removes a class from an element.

                }

        }