function validate() {
    var temp = document.getElementById("temp").value;
    if (isNaN(temp)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById("temp").value = "";
    }
}

function convert() {
    var temp = parseFloat(document.getElementById("temp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var convTemp;
    var result1;

    if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        convTemp = (temp * 9/5) + 32;
        result1 = temp.toFixed(2) + "°C is " + convTemp.toFixed(2) + "°F";
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        convTemp = (temp - 32) * 5/9;
        result1= temp.toFixed(2) + "°F is " + convTemp.toFixed(2) + "°C";
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        convTemp = temp + 273.15;
        result1 = temp.toFixed(2) + "°C is " + convTemp.toFixed(2) + " K";
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        convTemp = temp - 273.15;
        result1 = temp.toFixed(2) + " K is " + convTemp.toFixed(2) + "°C";
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        convTemp = (temp - 32) * 5/9 + 273.15;
        result1= temp.toFixed(2) + "°F is " + convTemp.toFixed(2) + " K";
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        convTemp = (temp - 273.15) * 9/5 + 32;
        result1 = temp.toFixed(2) + " K is " + convTemp.toFixed(2) + "°F";
    }

    document.getElementById("result").innerHTML = result1;
}
