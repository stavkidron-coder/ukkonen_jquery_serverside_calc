// requires
const express = require ('express');
const bodyParser = require ('body-parser');
const history = require('./modules/history');

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
    let answer = 0;
    if( req.body.operator === '+' ){
        answer = Number( req.body.input1 ) + Number( req.body.input2 );
    }
    else if( req.body.operator === '-' ){
        answer = Number( req.body.input1 ) - Number( req.body.input2 );
    }
    else if( req.body.operator === '*' ){
        answer = Number( req.body.input1 ) * Number( req.body.input2 );
    }
    else if( req.body.operator === '/' ){
        answer = Number( req.body.input1 ) / Number( req.body.input2 );
    }
    answerObject = {
        answer: answer
    } // sending an object instead of a number to avoid status code collision
    res.send( answerObject );
    // add this calculation to history
    const historyObject = {
        num1: req.body.input1,
        operator: req.body.operator,
        num2: req.body.input2,
        answer: answer
    } // end historyObject
    history.push( historyObject );
    console.log( 'history:', history );
}) // end /math POST

app.listen(port, () => {
    console.log("up and running on port: ", port);
});



