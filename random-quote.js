const fs = require("fs");

let raw = fs.readFileSync('brad-quotes.json');

let quotes = JSON.parse(raw);



let rand = Math.floor(Math.random() * quotes.length)
//console.log(quotes.length)
console.log(quotes[rand])