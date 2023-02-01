// ----------------  primitive data types -------------------

var num = 10;                           //number //
console.log(typeof num);

// -------------------------

var ename = 'kalyani';                   //string//
console.log(typeof ename);

// --------------------------

var isMarried = true;                    //boolean//
console.log(typeof isMarried);

// --------------------------

var container = null;                    //null (we get type as object) because js is object oriented programming language//
console.log(typeof container);

// -----------------------------

var dress;                               // undefined//
console.log(typeof dress);

// -------------------------------

var sym = Symbol('hello')                // symbol//
var sym2 = Symbol('hello')
if(sym == sym2){
    console.log(true);
}
else{false};

// --------------------------------

var big = 456788n                         // bigint //
console.log(typeof big);

// ----------------------------- non-primitive data types --------------------

var fruits = ['apple','banana',' ','grapes','berry']   // array type 1
console.log(fruits);
console.log(fruits[0]);
// -----------
fruits.color='red'          //special property does not occupy any num

// -----------------
var fruits2 = new Array('strawberry','water melon');   // array type 2
console.log(fruits2);
// -------------
var details = ['kal',26,null,{}]                // heterogeneous array
console.log(details);
// -------------
var det = ['kal','chal','man','jun']             //homogeneous array
console.log(det);
// ----------------
var stdDetails = [
    {name : 'kal',age:26},{name:'chal',age:36}]   // complex array

// ---------------------------------------------

var empDetails ={
    fName : 'kalyani', lName : 'koyi'          //object type 1
}
console.log(empDetails);
console.log(empDetails.fName);
// ---------------
var empDet = new Object();                    // object type 2
empDet.sname="kal";
empDet.age = 26
console.log(empDet);
// ----------------------------------------------

var date = new Date;                    // date
console.log(date);
// -----------------------------------------------

function example(a,b){                      // named function
    var c = a+b
    console.log(c);
};
example(10,20)

// ---------------------

 var b = function(var1,var2){              // Anonymous function & function expression
var a = var1 * var2                       
console.log(a);
}
b(2,8)
// -------------------------

var division =(x,y)=>{                        // Arrow function
var z = x/y
console.log(z);
}
division(20,10);
// ---------
var food = pizza=>console.log(pizza);      // Arrow func in single line 
food('dont eat');

// ---------------------------

(function (num1,num2){
var num3 = num1*num2
console.log(num3);
})(2,5)
