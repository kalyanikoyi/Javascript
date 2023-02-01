// ---------------------- arithmetic operators -----------------------

var a = 10;
var b = 20;
var c = a + b;
var d = b - a;
var e = a*b;
var f = b/a;
var g = b%a;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// ---------------------  Assignment operators -----------------------

 var eName = 'kalyani';
 var PName = eName;
 console.log(PName);

 var num = 10
 var num2 = 20;
 console.log(num+= 10);
 console.log(num2-= 10);
 console.log(num*=10);
 console.log(num/=10);
 console.log(num%=10);

//  ------------------------ comparision operators ---------------------

var a = 20;
var b = 30;
console.log(a==b);
console.log( a > b);
console.log( a < b);
console.log( a >= b);
console.log( a <= b);
console.log( a != b);

// -------------------------- conditional operators-----------------

var age = 26
var result = age>=18? 'major':'minor' ;
console.log(result);

// --------------------------- logical operators ------------------------

var x =100; var y = 200; z =300
console.log(x>y && y>z );
console.log(x>y || y>z );
console.log(x>y != y>z );

// ------------------ concatination operators -----------------------

var a = 100;
var b = 'kalyani'
console.log(a+b);

// ---------------------- Typeof operators ---------------------
var num = 10;
console.log(typeof num);

var string = '10';
console.log(typeof string);

var nul = null;
console.log(typeof nul);

var undefine;
console.log(typeof undefine);

var isMarried = true
console.log(typeof isMarried);

var sym = Symbol('hello')
console.log(typeof sym);

var bigint =456789n
console.log(typeof bigint);





