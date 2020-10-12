console.log("hello from js");
let chosenOperator = '';

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    $('#submit').on('click', submitMath);

    $('#add').on('click', chooseAdd);

    // perform GET request to server to get all history
}

function chooseAdd(){
    console.log('+');
    chosenOperator = '+';
}

function submitMath(){
    console.log('clicked');
    // grab the values from the DOM;
    // grab math operator

    let mathObject = {
        input1: $('#input1').val(),
        input2: $('#input2').val(),
        operator: chosenOperator
    }

    console.log(mathObject);

    // create an AJAX POST request to server
    // send mathObject for calculation
}