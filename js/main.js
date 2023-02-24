"use strict";
const ulElement = document.querySelector("ul.list");

for (let i = 1; i <= 100; i++){
    const liElement = document.createElement('li');
    ulElement.append(liElement);
    switch (true){
        case ((i % 3 === 0) && (i % 5 === 0)) :
            console.log('FizzBuzz');
            liElement.append('FizzBuzz');
            liElement.className = "box-both";
            break;
        case (i % 3 === 0) :
            console.log('Fizz');
            liElement.append('Fizz');
            liElement.className = "box-fizz";
            break;
        case (i % 5 === 0) :
            console.log('Buzz');
            liElement.append('Buzz');
            liElement.className = "box-buzz";
            break;
        default:
            console.log(i);
            liElement.append(i);
            liElement.className = "box-std";
        }
    }