console.log("hello from js");
let chosenOperator = '';

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    // call to do math on server
    $('#submit').on('click', submitMath);
    // operator selectors
    $('#add').on('click', chooseAdd);
    $('#divide').on('click', chooseDivide);
    $('#multiply').on('click', chooseMultiply);
    $('#subtract').on('click', chooseSubtract);
    // clear inputs
    $('#clear').on( 'click', clearInputs );
    // perform GET request to server to get all history
} // end onReady

function chooseAdd(){
    console.log('+');
    chosenOperator = '+';
} // end chooseAdd

function chooseDivide(){
    console.log('/');
    chosenOperator = '/';
} // end chooseDivide

function chooseMultiply(){
    console.log('*');
    chosenOperator = '*';
} // end chooseMultiply

function chooseSubtract(){
    console.log('-');
    chosenOperator = '-';
} // end chooseSubtract

function clearInputs(){
    console.log( 'in clearInputs' );
    chosenOperator = '';
    $('#input1').val( '' ); // using .val as a "setter"
    $('#input2').val( '' );
} // end clearInputs

function submitMath(){
    console.log('clicked');
    // grab the values from the DOM;
    // grab math operator

    let mathObject = {
        input1: $('#input1').val(), // using .val as a "getter"
        input2: $('#input2').val(),
        operator: chosenOperator
    }

    console.log(mathObject);

    // create an AJAX POST request to server
    // send mathObject for calculation
} // end submitMath