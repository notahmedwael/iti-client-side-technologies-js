// 1. String Object
// 1.1 User validation

var userName = "";

while(true){
    userName = prompt("Enter your name (Letters only)");
    if(userName && /^[a-zA-Z\s'-]+$/.test(userName)){
        break;
    }
    else{
        alert("Enter a valid name! (Letters only, no numbers or special characters!)")
    }
}

var phoneNumber = "";

while(true){
    phoneNumber = prompt("Enter your phone number (8 Digits): ");
    if(phoneNumber && /^\d{8}$/.test(phoneNumber)){
        break;
    }
    else{
        alert("Enter a valid phone number! (8 Digits)")
    }
}


var mobileNumber = "";

while(true){
    mobileNumber = prompt("Enter your phone number (11 digits, starts with [010, 011, 012, 015]): ");
    if(mobileNumber && /^01[0125]\d{8}$/.test(mobileNumber)){
        break;
    }
    else{
        alert("Enter a valid mobile number! (Egyptian phone number)")
    }
}

var email = "";

while(true){
    email = prompt("Enter your email (johndoe@example.com): ");
    if(email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        break;
    }
    else{
        alert("Enter a valid email! (e.g. johndoe@example.com)")
    }
}

alert(`Data:\n
    name: ${userName}\n
    phoneNumber: ${phoneNumber}\n
    mobileNumber: ${mobileNumber}\n
    email: ${email}
    `);


// 1.2 Palindrome String

function checkPalindrome(str, mode){
    mode = Number(palindromeMode);

    if (mode == 0){
        str = str.toLowerCase();
    }

    if(mode !== 0 && mode !== 1){
        throw "Mode has to be 0 or 1";
    }

    var left = 0;
    var right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        right --;
        left ++;
    }

    return true;
}


var strToCheck = "";
var palindromeMode = 0;

while(true){

try {
    strToCheck = prompt("Enter a string to check if it's a palindrome: ");
    if(!strToCheck) continue;
    palindromeMode = prompt(`Enter your mode: \n
        0) Case insensitive
        1) Case sensitive
        `)
    var check = checkPalindrome(strToCheck, palindromeMode);
    if(check){
        alert("Palindrome");
    }else{
        alert("Not palindrome");
    }
    break;
} catch (error) {
    alert("Error: " + error);
}
}


// 2. Math Object
// 2.1 Area of circle

function circleArea(radius){
    radius = Number(radius);
    return Math.PI * Math.pow(radius, 2);
}

var radius = "";

while(true){
    radius = prompt("Enter radius: ");

    if(radius && isFinite(radius) && radius > 0){
        alert(`Total area of circle with radius ${radius} is: ${circleArea(radius)}`);
        break;
    }else {
        alert("Enter a valid numeric!");
    }
}

// 2.2 Sqrt of a number

function sqrt(num){
    num = Number(num);
    return Math.sqrt(num);
}

var num = "";

while(true){
    num = prompt("Enter number to get its square root: ");

    if(num && isFinite(num) && num >= 0){
        alert(`Square root of ${num} is: ${sqrt(num)}`);
        break;
    }else {
        alert("Enter a valid numeric!");
    }
}

// 3. Array Object
// 3.1 Fill an array

var elem1 = "";
var elem2 = "";
var elem3 = "";


while(true){
    var nums = []
    alert("Enter three number to do operations on them: ");

    elem1 = prompt("Enter first element: ");
    if(! elem1 || !isFinite(elem1) || elem1 == 0){
        alert("Enter a numeric value except zero");
        continue;
    }

    nums.push(Number(elem1));

    elem2 = prompt("Enter second element: ");
    if(! elem2 || !isFinite(elem2) || elem2 == 0){
        alert("Enter a numeric value except zero");
        continue;
    }

    nums.push(Number(elem2));
    
    elem3 = prompt("Enter third element: ");
    if(! elem3 || !isFinite(elem3) || elem3 == 0){
        alert("Enter a numeric value except zero");
        continue;
    }

    nums.push(Number(elem3));
    
    var sum = 0;

    var mul = 1;

    var div = nums[0];

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        mul *= nums[i];
        if(i > 0 && nums[i]!== 0) div /= nums[i];
    }

    alert(`
        Sum of the 3 values ${nums.join("+")} = ${sum} \n
        Multiplication of the 3 values ${nums.join("*")} = ${mul} \n
        Division of the 3 values ${nums.join("/")} = ${div}
        `);
    break;
}

// 4. Functions
// 4.1

function twoParams(param1, param2){
    if(arguments.length !== 2){
        throw("Only two parameters are allowed in the function. \n Pass only two argument")
    }

    return Array.from([param1, param2]);
}

try {
    console.log("Two params function wrong call: " + twoParams(1, 2, 3));
} catch (error) {
    console.log("Error: " + error);
}

try {
    console.log("Two params function correct call: " + twoParams(1, 2));
} catch (error) {
    console.log("Error: " + error);
}

// 4.2 Legacy

function anyParams(){
    var args = Array.from(arguments);

    return args.reverse();
}

console.log("anyParams function legacy: " + anyParams(1, 2, 3, 4, 5, 6));

// 4.2 ES6

function anyParams(...args){
    return args.reverse();
}

console.log("anyParams function es6: " + anyParams(1, 2, 3, 4, 5, 6));

// 4.3

function addNValues(){
    var sum = 0;

    for (var index = 0; index < arguments.length; index++) {
        if(isFinite(arguments[index])){
        sum += Number(arguments[index]);
        }else{
            throw `Number at index ${index} is not a number.`
        }
    }

    return sum;
}

try {
    console.log("Add n values with bad call: " + addNValues(1, 2, 3, "ss", 4));
} catch (error) {
    console.log("Error: " + error);
}

try {
    console.log("Add n values with good call: " + addNValues(1, 2, 3, 4, 5));
} catch (error) {
    console.log("Error: " + error);
}

// 4.4

function getWeekday(date){
    var weekday = date.toDateString().split(" ")[0];
    return weekday;
}

var d = new Date();

console.log(getWeekday(d));