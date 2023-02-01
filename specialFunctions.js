// ------------------------ closure function ------------------------------

function outer(){
    var a = 'outer function'
    console.log(a);
    console.log('I am Outer function');

    inner()   //we can call here or 
    console.log(' This is outer.Inner function access the properties of outer function');
    
    
    function inner(){                                         
       var b = 'Inner';
       console.log(b);
       console.log('I am inner function');
    }  //inner()           we can call here
    
}outer()

// ------------------------- function chaining  -----------------------------

function one (){
    console.log('I am one');
}
function two (){
    console.log('I am two');
    return one;                                          //type 1
}
function three(){
    console.log('I am three');
    return two;
}
three ()()()
// -----------------------------

function okati (){
    console.log('This is one');
}
function rendu(){
    console.log('This is two');                 //type 2
    return okati;
}
function mudu(){
    console.log('This is three');
    return rendu;
}
var receivingTwo =mudu();
var receivingone =rendu();
okati()

// ------------------------ call back function ---------------

function callDad (callHusband){
    setTimeout(()=>{
     console.log('call dad');
    callHusband(callMom)
    },2000)
}
function callMom(callManu){
    setTimeout(() => {
        console.log('call mom');
callManu()
    }, 2000);                                    //used set time out
}
function callHusband(callMom){
    setTimeout(() => {
        console.log('call husband');
callMom(callManu)
    }, 2000);
}
function callManu(){
    setTimeout(() => {
       console.log('call manu'); 

    }, 2000);
}
callDad(callHusband)

// ----------------- set interval------------------------------------

// var i =0;
// setInterval(() => {
//     console.log(i+=10);
// }, 1000)

// ----------------------- function scope ---------------------

var xyz = 'hello'
console.log(xyz);

function a(){                           // 1
    xyz ='good morning'
    console.log(xyz);
}a();
console.log(xyz);
// -------------------
var abc = 'welcome';
console.log(abc);

function b(){                          // 2
    abc ='good evening'
    console.log(abc);
}
console.log(abc);
b()
// --------------------

var efg = 'I love u';
console.log(efg);

function c(){                          // 2
    efg ='Love u 2'
    console.log(efg)
};
    console.log(efg);
c();
console.log(efg);

// ------------------------ variable hoisting ------------------------

console.log(eName);
var eName;
eName='kalyani'
