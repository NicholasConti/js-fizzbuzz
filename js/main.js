"use strict";
const ulElement = document.querySelector("ul.list");

for (let i = 1; i <= 100; i++){
    const liElement = document.createElement('li'); // ELEMENTO li X HTML
    ulElement.append(liElement);    // INSERISCO 'li' NELL HTML
    switch (true){
        //SE MULTIPLO DI 3 E 5
        case ((i % 3 === 0) && (i % 5 === 0)) :
            console.log('FizzBuzz');
            liElement.append('FizzBuzz'); // INSERISCO STRINGA NEI li
            liElement.className = "box-both"; // ASEEGNO CLASSE AL li
            break;
        // SE MULTIPLO DI 3
        case (i % 3 === 0) :
            console.log('Fizz');
            liElement.append('Fizz');   // INSERISCO STRINGA NEI li
            liElement.className = "box-fizz";   // ASEEGNO CLASSE AL li
            break;
        // SE MULTIPLO DI 5
        case (i % 5 === 0) :
            console.log('Buzz');
            liElement.append('Buzz');   // INSERISCO STRINGA NEI li
            liElement.className = "box-buzz";   // ASEEGNO CLASSE AL li
            break;
        // SE NON E MULTIPLO
        default:
            console.log(i);
            liElement.append(i);    // INSERISCO NUMERO i NEI li
            liElement.className = "box-std";    // ASEEGNO CLASSE AL li
        }
    }