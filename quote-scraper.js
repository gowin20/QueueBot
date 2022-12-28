const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function startServer() {
    fs.readFile('./sbeve-quotes.html', 'utf8', (err, data) => {
        if (err) {
            console.log('eew');
        }

        const { document } = (new JSDOM(data)).window;
        console.log(document);
        const quotes = document.getElementsByClassName('chatlog__markdown-quote-content');

        const quoteContent = [];
        for (const quote of quotes) {
            quoteContent.push(quote.innerHTML);
        }
        const output = JSON.stringify(quoteContent);
        console.log(output);
        fs.writeFileSync('brad-quotes.json', output);
    });
    return;
}

startServer();