var numbers = [];

for (var i = 0; i < 5; i++){
    var currNum = "";
    while(true){
        currNum = prompt(`Enter number ${i + 1}`);
        if(currNum && isFinite(currNum)){
            break;
        }else{
            alert("Enter a valid number!");
        }
    }
    numbers.push(Number(currNum));
}

var ascNums = [...numbers].sort(function(a, b){
    return a - b;
});

var desNums = [...numbers].sort(function(a, b){
    return b - a;
});


var body = document.body;

var heading = document.createElement("h1");

var hr = document.createElement("hr");

heading.textContent = "Sorting";

body.appendChild(heading);
body.appendChild(hr);

var valuesEnteredText = document.createElement("p");
valuesEnteredText.textContent = "u've entered the values of ";
valuesEnteredText.style.color = 'red';
valuesEnteredText.style.display = 'inline';

var originalNumsNode = document.createElement("p");
originalNumsNode.textContent = numbers.join(", ");
originalNumsNode.style.display = 'inline';

body.appendChild(valuesEnteredText);
body.appendChild(originalNumsNode);

var valuesSortedDescText = document.createElement("p");
valuesSortedDescText.textContent = "ur values after being sorted descending "
valuesSortedDescText.style.color = 'red';
valuesSortedDescText.style.display = 'inline';

var valuesSortedAscText = document.createElement("p");
valuesSortedAscText.textContent = "ur values after being sorted ascending "
valuesSortedAscText.style.color = 'red';
valuesSortedAscText.style.display = 'inline';

var descNumsNode = document.createElement("p");
descNumsNode.textContent = desNums.join(", ");
descNumsNode.style.display = 'inline';

var ascNumsNode = document.createElement("p");
ascNumsNode.textContent = ascNums.join(", ");
ascNumsNode.style.display = 'inline';

var br = document.createElement("br");

body.appendChild(br);
body.appendChild(valuesSortedDescText);
body.appendChild(descNumsNode);
body.appendChild(br.cloneNode());
body.appendChild(valuesSortedAscText);
body.appendChild(ascNumsNode);