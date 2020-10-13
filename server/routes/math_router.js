// this is the same for all route modules
const express = require('express');
const router = express.Router();
const history = require('../modules/history');

// get hsitory
router.get( '/', ( req, res )=>{
    console.log( '/math GET hit' );
    res.send( history );
}) // end /math GET

// post for new equation
router.post( '/', ( req, res )=>{
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

// this is the same for all route modules
module.exports = router;