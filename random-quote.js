const fs = require('fs');

const raw = fs.readFileSync('brad-quotes.json');

const quotes = JSON.parse(raw);


const rand = Math.floor(Math.random() * quotes.length);
console.log(quotes[rand]);