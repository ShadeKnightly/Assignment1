/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Heather-may Rebecca Howse
*/

/*https://medium.com/@brandon.lau86/how-to-create-a-delay-in-javascript-and-a-practical-use-of-async-await-4dbd1d7744f4*/
/*FYI: Re:addClass("show"): If you don’t start with visibility: hidden; opacity: 0;, 
users might see the elements briefly before they disappear. 
Keeping them hidden in CSS and only adding .show in JS avoids this problem*/

$(function () {

    $("#textbox").delay(5000).queue(function (next) {
        $(this).addClass("show");
        next();
    });

    $("#text").delay(6000).queue(function (next) {
        $(this).html("<h2>I'm Heather-may.</h2>").fadeIn(500);
        next();
    });

    $("#quotebox").delay(10000).queue(function (next) {
        $(this).addClass("show");
        next();
    });
});

// Define MarkToGrade
function MarkToGrade() {
    try {
        let inputElement = document.getElementById("mark-input-box");
        let messageElement = document.getElementById("validation-message");
        let gradeElement = document.getElementById("grade-result");

        let mark = inputElement.value.trim(); //Scrape the input: Get the value from the mark-input-box element.

       
        // Provide specific validation messages if incorrect.
        messageElement.innerText = "";
        gradeElement.innerText = "";

        if (mark === "") { 
            throw "Error: Please enter a mark.";
        }

        let numericMark = parseInt(mark, 10);
        if (isNaN(numericMark)) {  // Validate the Input: Check if it's a number: isNaN
            throw "Error: Mark must be a number.";
        }

        //Ensure it's nonnegative and less than 101.
        if (numericMark < 0) {
            throw "Error: Mark cannot be negative.";
        }
        if (numericMark > 100) {
            throw "Error: Mark cannot be greater than 100.";
        }

        //Display Grade:
        //If valid, assign the corresponding grade based on the range.
        let grade;
        if (numericMark > 90) {
            grade = "A";
        } else if (numericMark > 80) {
            grade = "B";
        } else if (numericMark > 70) {
            grade = "C";
        } else if (numericMark > 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        gradeElement.innerText = `Grade: ${grade}`;
    } catch (error) {
        document.getElementById("validation-message").innerText = error;
    }
}

var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

function loadTableData() {
    var tableBody = document.getElementById("staffTable");
    tableBody.innerHTML = "";
    dataSet.forEach(function (row) {
        var tr = document.createElement("tr");
        row.forEach(function (cell) {
            var td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

function sortTable(columnIndex) {
    if (columnIndex === 5) {  
        dataSet.sort(function (a, b) {
            var valA = parseFloat(a[columnIndex].replace(/[$,]/g, ""));
            var valB = parseFloat(b[columnIndex].replace(/[$,]/g, ""));
            return valA - valB;
        });
    } else {
        dataSet.sort(function (a, b) {
            return a[columnIndex].localeCompare(b[columnIndex]);
        });
    }
    loadTableData();
}

function sortSalary() {
    var sortOrder = document.getElementById("sortOrder").value;
    if (sortOrder === "firstName" || sortOrder === "lastName") {
        dataSet.sort(function (a, b) {
            var nameA = a[0].split(" ")[sortOrder === "firstName" ? 0 : 1] || "";
            var nameB = b[0].split(" ")[sortOrder === "firstName" ? 0 : 1] || "";
            return nameA.localeCompare(nameB);
        });
    } else {
        dataSet.sort(function (a, b) {
            var valA = parseFloat(a[5].replace(/[$,]/g, ""));
            var valB = parseFloat(b[5].replace(/[$,]/g, ""));
            return sortOrder === "asc" ? valA - valB : valB - valA;
        });
    }
    loadTableData();
}

function filterTable() {
    var input = document.getElementById("searchBox").value.toLowerCase();
    var tableBody = document.getElementById("staffTable");
    tableBody.innerHTML = "";
    dataSet.forEach(function (row) {
        if (row[0].toLowerCase().includes(input) || row[1].toLowerCase().includes(input)) {
            var tr = document.createElement("tr");
            row.forEach(function (cell) {
                var td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadTableData();
});


/*Convert temps*/

/*basic formula for each calculation.
F to C     (f-32) * 5/9
C to K    c + 273.15*/

$(function() {
    let celsiusTemp = null;
    
    // Named function to convert Fahrenheit to Celsius
    function toCelsius(f) {
        return (f - 32) * 5 / 9;
    }
    
    // Anonymous function to convert Celsius to Kelvin
    let toKelvin = function(c) {
        return c + 273.15;
    };
    
    // Convert Fahrenheit to Celsius
    $("#toCelsius").on("click",function() {
        let f = parseFloat($("#fahrenheit").val());
        if (!isNaN(f)) {
            celsiusTemp = toCelsius(f);
            $("#result").text(`Celsius: ${celsiusTemp.toFixed(2)} degrees`);
        } else {
            $("#result").text("Please enter a valid number.");
            console.log("celsius result");
        }
    });
    
    // Convert Celsius to Kelvin
    $("#toKelvin").on("click", function() {
        if (celsiusTemp !== null) {
            let k = toKelvin(celsiusTemp);
            $("#result").text(`kelvins: ${k.toFixed(2)}`);
            console.log("K result");
        } else {
            $("#result").text("Please convert to Celsius first.");
        }
    });
});
