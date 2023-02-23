"use strict";
const ulElement = document.querySelector("ul.list");

for (let i = 1; i <= 100; i++){
    const liElement = document.createElement('li');
    switch (true){
        case ((i % 3 === 0) && (i % 5 === 0)) :
            console.log('FizzBuzz');
            liElement.append('FizzBuzz');
            ulElement.append(liElement);
            break;
        case (i % 3 === 0) :
            console.log('Fizz');
            liElement.append('Fizz');
            ulElement.append(liElement);
            break;
        case (i % 5 === 0) :
            console.log('Buzz');
            liElement.append('Buzz');
            ulElement.append(liElement);
            break;
        default:
            console.log(i);
            liElement.append(i);
            ulElement.append(liElement);
        }
    }