const fs = require('fs');
const http = require('http');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function startServer() {
    fs.readFile("./sbeve-quotes.html",'utf8',(err,data) => {
        if (err) {
            console.log("broken")
        }

        const { document } = (new JSDOM(data)).window;
        console.log(document)
        const quotes = document.getElementsByClassName("chatlog__markdown-quote-content");

        let quoteContent = []
        for (quote of quotes) {
            quoteContent.push(quote.innerHTML);
        }
        let output = JSON.stringify(quoteContent);
        console.log(output)
        fs.writeFileSync('brad-quotes.json',output);
        /*
        http.createServer(function(request,response) {
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        }).listen(8000);

        console.log("server started)")
        */
    })
    return
}

startServer()