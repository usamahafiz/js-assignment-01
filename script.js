function clearbutton(){
    document.getElementById("output").innerHTML = "";
}

function clearstatement(){

    document.getElementById("statement").innerHTML ="";
}

function alertname(){
   let fullName = "Hafiz Muhammad Usama";
   let name = alert(fullName)
   document.getElementById("output").innerHTML = fullName;
    document.getElementById("statement").innerHTML="this is alert function"
}

function alertnumber(){
    let number = "0305 5565781";
    let name = alert(number)
    document.getElementById("output").innerHTML = number;
     document.getElementById("statement").innerHTML="this is alert function of number"
 }


function variablename(){
    document.getElementById("statement").innerHTML = "Variable names are as follow:";
    document.getElementById("output").innerHTML =  `<ul>
    <li><strong>Declaration Keywords:</strong> Variables in javascript can be declared by using three keywords: <code>Var</code>,<code>let</code> and <code>const</code>.<br>
    <li><strong>var Keyword:</strong> The <code>var</code> keyword is the oldest way to declare variables in JavaScript. It has function scope and is subject to hoisting.</li>
    <li><strong>let Keyword:</strong> Introduced in ES6, <code>let</code> allows block-scoped variable declaration and is not hoisted.</li>
    <li><strong>const Keyword:</strong> Also introduced in ES6, <code>const</code> allows the declaration of variables whose values are constant and cannot be reassigned.</li>
    
    </ul>`
}

function camelcase(){
    document.getElementById("statement").innerHTML= "CamelCase Example given as:"
    document.getElementById("output").innerHTML =  `
    <ul>
    <li>User</li>
    <li>UserTime</li>
    <li>UserTimeLimit</li>
    </ul>`;
    
}

//sum
function sumvariables(){
    let num1 = 20;
    let num2 = 10;
    sum = num1 + num2 ;

    document.getElementById("statement").innerHTML =
    "num1 =" +num1+
    "<br>num2 =" +num2+
    "<br>sum = num1 + num2"
    document.getElementById("output").innerHTML = "Sum is: " + sum  ;
}
//subtract
function subvariables(){
    let num1 = 20;
    let num2 = 10;
    sub = num1 - num2 ;

    document.getElementById("statement").innerHTML =
    "num1 =" +num1+
    "<br>num2 =" +num2+
    "<br>sub = num1 - num2"
    document.getElementById("output").innerHTML = "Sub is: " + sub  ;

}

//multiply
function multiplyvariables(){
    let num1 = 20;
    let num2 = 10;
    multiply = num1 * num2 ;

    document.getElementById("statement").innerHTML =
    "num1 =" +num1+
    "<br>num2 =" +num2+
    "<br>multiply = num1 * num2"
    document.getElementById("output").innerHTML = "Product is: " + multiply  ;

}

//division
function dividevariables(){
    let num1 = 20;
    let num2 = 10;
    division = num1/num2 ;

    document.getElementById("statement").innerHTML =
    "num1 =" +num1+
    "<br>num2 =" +num2+
    "<br>multiply = num1 /num2"
    document.getElementById("output").innerHTML = "Division is: " + division  ;

}

//somecalculation

function somecalculation(){
   let calculation = 36/6*3+2**4-(5+3)

    document.getElementById("statement").innerHTML =
    "calculation = 36/6*3+2**4-(5+3)"
    
    document.getElementById("output").innerHTML = "Calculation is: " + calculation  ;

}