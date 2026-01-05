// Q1

function a(){
    var y;
    console.log(y);
}

function b(){
    console.log(y);
}

function c(){
    var x = 10;
    var y = 20;
    console.log(y*x-2);
}

function d(){
    var y;
    console.log(typeof y);
}

function e(){
    var x = "1"
    var y = 2;
    console.log(x + y);
}

function f(){
    var x = 1;
    var y = true;
    console.log(x + y);
}

a();
// b();
c();
d();
e();
f();


// Q2

var fullText = "";

var userMessage = prompt("Enter message to display: ");

if(userMessage) {
    for (var i = 1; i <=6; i++){
        fullText += (`<h${i}>${userMessage}</h${i}><br>`);
    }
    document.body.innerHTML = fullText;
}else{
    alert("You did not enter a message!")
}


// Q3

var sum = 0;

while(true){
    var input = prompt(`Current sum = ${sum} \n Enter a number to keep adding to sum or enter 0 to stop`);

    if(input === null){
        break;
    }

    var num = Number(input);

    // Check if not a number or not empty string is entered
    if(isNaN(num) || input.trim() === ""){
        alert("Enter a valid input.")
        continue;
    }

    if(num === 0){
        break;
    }

    sum += num;

    if(sum > 100){
        alert(`Sum exceeded 100 \n sum = ${sum}`);
        break;
    }
}

alert(`Finished adding to sum. Final Sum is ${sum}`);


// Q4

var userName = "";

while (true) {
    userName = prompt("Enter your name:");
    if (userName && /^[A-Za-z\s]+$/.test(userName)) {
        break;
    }
    alert("Enter a valid name!");
}


var birthYear = "";

while(true){
    birthYear = prompt("Enter your birth year: ");

    if(birthYear && birthYear.trim() !== "" && isFinite(birthYear) && birthYear < 2010){
        break;
    }else{
        alert("Enter a valid year!");
    }
}

var numBirthYear = Number(birthYear);

var age = 2026 - numBirthYear;

fullText += `
<p><b><u>Name:</u></b> ${userName}</p>
<p><b><u>Birth Year:</u></b> ${numBirthYear}</p>
<p><b><u>Age:</u></b> ${age}</p>

`;

document.body.innerHTML = fullText;
