// requires
const express = require ('express');
const bodyParser = require ('body-parser');
const history = require('./modules/history');
console.log(history);

// globals
const app = express();
const port = 5000;

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// get history

// post for new equation
app.post( '/math', ( req, res )=>{
    console.log( '/math POST hit:', req.body );
    res.send( 'meow' );
}) // end /math POST

app.listen(port, () => {
    console.log("up and running on port: ", port);
});



