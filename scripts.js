//alert("hello")

// Javascript testing & experimentation  //

//document.getElementById("insert").innerHTML = "Hello Greg!";

//document.getElementById("change").style.backgroundColor = "blue";

let internetSec = document.querySelector("#internet")
//internetSticky.style.backgroundColor = "lightBlue"

// Changes the content of an id
function highlight(){
    var element = document.getElementById("highDiv");
    element.classList.add("highlighted");
}

// Toggles between two css styles - Might be useful when combined with slide effect (if possible?)
function toggleFunction() {
    var element = document.getElementById("toggleButton");
    if (element.className == "inactive") {
        element.className = "active";
    } else {
        element.className = "inactive"
    }
}