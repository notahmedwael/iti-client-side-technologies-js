var userData = []

var numPersons = "";

while(true){
    numPersons = prompt("Enter number of persons: ");
    if(numPersons && Number(numPersons)){
        break;
    }else{
        alert("Enter a valid number");
    }
}

numPersons = Number(numPersons);

for (var i = 0; i < numPersons; i++) {
    var uName, uAge;

    while (true) {
        uName = prompt("Enter Username (4-9 chars):");
        var nameRegex = /^[a-zA-Z]{4,9}$/;
        
        if (nameRegex.test(uName)) {
            break;
        }
        alert("Invalid Username! Must be 4-9 letters.");
    }

    while (true) {
        uAge = prompt("Enter Age (must be 11-59):");
        var ageRegex = /^(1[1-9]|[2-5][0-9])$/;

        if (ageRegex.test(uAge)) {
            break;
        }
        alert("Invalid Age! Must be between 11 and 59.");
    }

    userData.push({
        name: uName,
        age: Number(uAge)
    });
}

var table = document.createElement("table");
table.border = "1";

var headerRow = document.createElement("tr");

var nameHeader = document.createElement("th");
nameHeader.textContent = "Name";

var ageHeader = document.createElement("th");
ageHeader.textContent = "Age";

headerRow.appendChild(nameHeader);
headerRow.appendChild(ageHeader);
table.appendChild(headerRow);

for (var j = 0; j < userData.length; j++) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = userData[j].name;

    var ageCell = document.createElement("td");
    ageCell.textContent = userData[j].age;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    table.appendChild(row);
}

document.body.appendChild(table);