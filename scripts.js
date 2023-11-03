//alert("hello")

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

// COLLAPSIBLE BOXES //
// declaring variables, var collapsed is setting a class as a variable
var collapsed = document.getElementsByClassName("collapsing");
var i;

//for loop with an if else statement adding a toggle button and creating the box on a click
for (i=0; i< collapsed.length;i++) {
    collapsed[i].addEventListener("click", function() {
        this.classList.toggle("open"); // this. allows this effect to be used else where, specifying this specific instance
        var content = this.nextElementSibling; // connects the two boxes together
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }   else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}




  