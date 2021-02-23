// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const greeting = getInput(0) + " " + getInput(1);
let greet = "Hi " + greeting;

console.log(greet);

const wyd = "Hey " + getInput(0).toUpperCase() + " " + getInput(1).toUpperCase() + " I'm completing my hw right now.";
console.log(wyd);

const intlwyd = "Hey " + getInput(0)[0].toUpperCase() + "." + getInput(1)[0].toUpperCase() + "." + " I'm completing my hw right now.";
console.log(intlwyd);

const userEmail = "Your email is " + getInput(0).toLowerCase() + "." + getInput(1).toLowerCase() + "@codeimmersives.com" + ".";
console.log(userEmail);