const express = require('express');
const { readFile } = require('fs');

const app = express();

const port = 3000;

app.get('/', (request, response) => {

    readFile('./index.html', 'utf8', (error, html) => {

        if (error) {
            response.status(500).send("Sorry, something went wrong!");
        }

        response.send(html);

    });

});

app.listen(port, () => console.log("App available on http://localhost:3000"));