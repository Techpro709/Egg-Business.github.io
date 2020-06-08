// JavaScript source code

// global variables
var bank = Number(localStorage.getItem("bankValue"));
var inputValue = 0;

//validates input up to only 2 decimal places
var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}
//rounds to nearest 2 decimals
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
//adds money input to the bank
function count() {
    inputValue = Number(document.getElementById("moneyInput").value);
    //clear console
    console.clear()
    //button pushed 
    console.log("Recive has been pushed");
    //what is inputvalue


    //telling user what bank,inputvalue and new bank is
    console.log(bank);
    console.log("Input value is equal to " + inputValue);
    bank += inputValue;
    bank = round(bank, 2);
    console.log("Updated");
    console.log("bank = " + bank);
    // updating localStorage

    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("bankValue", bank);
        // Retrieve
        display();
    } else {
        document.getElementById("bank_value").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
//displays bank currency
function display() {
    document.getElementById("bank_value").innerHTML = localStorage.getItem("bankValue");

}
//resets bank currency
function reset() {
    console.clear();
    console.log("Reset");
    document.getElementById("moneyInput").value = "";
    bank = 0;
    localStorage.setItem("bankValue", bank);
    display()
}