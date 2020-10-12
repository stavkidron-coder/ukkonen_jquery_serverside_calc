const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

const history = require('./modules/history');
console.log(history);

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, () => {
    console.log("up and running on port: ", port);
});



