// ------------------ 1. To get current Time & day ---------------------

let date = new Date();
console.log(date);
let day = date.getDay()
let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log("Today is : " + dayList[day] );

let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let prepand = (hour > 12? "PM" : "AM")
hour = (hour> 12? hour-12:hour)

console.log("Current Time : " + hour + " " +  prepand + " : " + minute + " : " + second );

// ----------------- 2. To print current page ---------------------

function print_page(){
    window.print()
}

// ------------------ 3. To get current date --------------------

let date1 = new Date()
let dd = date1.getDate()
let mm = date1.getMonth()+1
let yyyy = date1.getFullYear()
console.log(dd+"/"+mm+"/"+yyyy);
console.log(dd+"-"+mm+"-"+yyyy);

// ------------------ 4. To get area of triangle -----------------

// area of triagle = sqrt of s(s-a)(s-b)(s-c)
// where s is semisphere of triangle 
// s= a+b+c/2
let s1 = 5
let s2 = 6
let s3 = 7

let s = (5+6+7)/2
let area = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)))
console.log(area);

// ------------------ 5. To check given year is leap yr or not------------

function get_leapYear(year){
return (year % 100 ===0)? (year % 400 === 0):(year % 4 === 0)
}
console.log( get_leapYear(2016));
console.log( get_leapYear(2017));
console.log( get_leapYear(2018));
console.log( get_leapYear(2019));
console.log( get_leapYear(2020));

// ----------------- 6. multiply & divide 2 numbers --------------

let num1 = document.getElementById('first').value
let num2 = document.getElementById('second').value

function multiply(){
    let num1 = document.getElementById('first').value
    let num2 = document.getElementById('second').value
    document.getElementById("result").innerHTML = num1*num2
}

function divide(){
    let num1 = document.getElementById('first').value
    let num2 = document.getElementById('second').value
    document.getElementById("result").innerHTML = num1/num2
}

// ----------------- 7. To get website URL(loading page) --------------

console.log(document.URL);

// ----------------- 8. difference b/w num & 13 and if num is more than 13 then get  double the absolute difference

function number(n){
    if (n<=13) 
    return 13-n
    else return (n-13)*2
}
console.log(number(15));
console.log(number(7));

// -------------------- 9. sum of 2 integers , if integers are same then get triple their sum

function add(x,y){

if(x == y)
 return 3*(x+y)
 else return (x+y) 
}
console.log(add(4,8));
console.log(add(4,4));

// ----------------------- 10.to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))

// ----------------------- 11.to create a new string adding “Py” in front of a given string.  If the given string begins with “Py” then return the original string.

function str(st){
    if (st.substring(0,2) === "py"){
        return st
    }
    else {
        return "py"+st
    } 
}
console.log(str("python"));
console.log(str("thon"));

// ----------------------- 12. Even numbers from 0 -10

for(let num = 0; num<=10 ; num%2==0){
console.log(num)
}
