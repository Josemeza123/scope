// variables

var a; //   declarando
var b='b';//    declaramos / asignamos
b='bb';//   reasignar
var a='aa';//   redeclarar


// Global Scope
var fruit='Apple'; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country='colombia'; // global
    console.log(country);
}

countries();
console.log(country);