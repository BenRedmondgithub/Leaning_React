let userMessage = "Hello World";

console.log (userMessage);
console.log (userMessage.length);
console.log (userMessage.toUpperCase());
console.log (userMessage.toLowerCase());

console.log (10 + 5);
console.log (10 - 5);
console.log (10 * 5);
console.log (10 / 5);


console.log (10 === 10);

console.log (10 === 5);

if (10 === 10) {
    console.log ("10 is equal to 10");
}
else {
    console.log ("10 is not equal to 10");
}

function GreetUser (userName, userAge = "Hello") {


    return `Hello ${userName}, you are ${userAge} years old`;
}


function combine (num1, num2, num3) {
    return num1 * num2 / num3;
}

console.log (combine (10, 5, 2)); 