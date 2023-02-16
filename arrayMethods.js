// -------------------------- 1. pop ---------------------------------

var fruits = ['banana','apple','grapes','cherry']
console.log(fruits.pop());

// pop removes last item from array & returns last item from the array &
// return type is string/number/boolean.

// -------------------------- 2. push --------------------------

console.log(fruits.push('strawberry'));
console.log(fruits);

// push adds item to the end & returns array length & return type is number

// -------------------------- 3.shift ---------------------------

console.log(fruits.shift());

// It extracts first item from array & returns first item & return type is number/string/boolean

// -------------------------- 4.unshift ------------------------

console.log(fruits.unshift('melon'));
console.log(fruits);


// it adds item to the first of an array & returns array length & return type is number

// -------------------------- 5.splice ------------------------

console.log(fruits.splice(1,1,'kismis'));
console.log(fruits);

// It takes 3 values (starting index value , no of deletions fron starting index value ,
// Item to be added in the place of deleted items). returns deleted values & 
// return  type is number/string/bololean. 

// -------------------------- 6.slice ----------------------

console.log(fruits.slice(1,2));
console.log(fruits);

// It takes two values (starting index value(deletion starts from this index value) ,
// stopping index value (deletion ends before this value)).Returns deleted values.
// return type is num/string/boolean. It does not change the original array.

// ------------------------- 7.is array ----------------------------

console.log(Array.isArray(fruits));
 
// It confirms whether the given array is array or not . Return type is boolean

// ------------------------- 8.includes ---------------------

console.log(fruits.includes('kiwi'));
console.log(fruits.includes('kismis'));

// It confirms whether the given value is in array or not . Return type is boolean

// ------------------------- 9.join -------------------

console.log(fruits.join(' - '))
console.log(fruits);

// using this we can add any value between the items . we call the value as delimit.

// ------------------------- 10. sort --------------------------

console.log(fruits.sort());
console.log(fruits);

// It arranges the values in ascending order. If the values are strings then the values 
// are arranged in alphabetical order.

// ------------------------  11. reverse -----------------------

console.log(fruits.reverse());

// It arranges the values in reverse order .

// --------------------------- 12. concat -----------------------

var num =[10,20,30,40]
console.log(fruits.concat(num));
console.log(fruits.concat('pomo'));
console.log(fruits);

// using this we can merge two arrays & we can also add any value to array.
// It does not change the original array.

// ------------------------------ 13. for each ----------------------
 fruits.forEach((value)=>{
console.log('This is ' + value);
})


var num1 = [1,2,3,4,5]
num1.forEach((item,index)=>{
    console.log('(' + index + ') ' + 'this is ' + item );   // method 1
})

// -----------
 let sum = 0
 num1.forEach((item)=>{                                  //sum of arr
console.log( sum+= item);
 })  


// --------------------------------14. reduce ---------------------------

let res = num1.reduce((acc,curr)=>{
    acc = acc + curr;                                       //sum of arr
    return acc
 })
 console.log(res);

//  --------------------------

let maxNum =num1.reduce((acc,curr)=>{
    if(curr > acc){
        acc = curr                                   // max num
    }
return acc
})
console.log(maxNum);

// It takes two parameters .one is accumilator nd the other is current .accumilator consist the entire arr /object.
// where as current consist the current value

// ------------------------------ 15.map ----------------------------
let arr = [5,6,10,11]
var output = arr.map((value)=>{
    return value*2
})
console.log(output);

// -------------------

let details =[
    { fName : 'kalyani',lName :'putta'},
    { fName : 'Chalapathi',lName :'koyi'},
    { fName : 'nani',lName :'kolluri'}]

let response = details.map((x)=>{
  return x.fName + ' ' + x.lName
})
console.log(response);

// ------------------------------ 16.find/filter --------------------

var numbers =[-3,-2,-1,0,1,2,3,4]
console.log(numbers.filter((value)=>{
    return value >1
}));


console.log(numbers.filter((value)=>{                       // even numbers
    return value % 2 === 0
}));
console.log(numbers.filter((value)=>{                       // odd numbers
    return value % 2 
}));

// -------------------

var varia1= ['a','b','a','b','c']
console.log(varia1.filter((item,index,arr)=>{
    return arr.indexOf(item) === index                           //duplicate array
    })
    );
    console.log(varia1);


// --------------------------------- 17.index of ---------------------

console.log(fruits.indexOf('melon'));










