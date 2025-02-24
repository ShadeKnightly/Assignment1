
/*Convert temps*/

/*basic formula for each calculation.
F to C     (f-32) * 5/9
C to K    c + 273.15*/

$(function() {
 
    $( "a" ).on("click",function( event ) {
 
        alert("Script Loaded!");
        console.log("Script Loaded");
 
    });
 
});



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
    $("#toCelsius").click(function() {
        let f = parseFloat($("#fahrenheit").val());
        if (!isNaN(f)) {
            celsiusTemp = toCelsius(f);
            $("#result").text(`Celsius: ${celsiusTemp.toFixed(2)} degrees C`);
        } else {
            $("#result").text("Please enter a valid number.");
            console.log("celsius result");
        }
    });
    
    // Convert Celsius to Kelvin
    $("#convertKelvin").click(function() {
        if (celsiusTemp !== null) {
            let k = toKelvin(celsiusTemp);
            $("#result").text(`Kelvin: ${k.toFixed(2)}K`);
            console.log("K result");
        } else {
            $("#result").text("Please convert to Celsius first.");
        }
    });
});
