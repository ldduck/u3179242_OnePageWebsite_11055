//alert("hello")


// Toggles between two css styles - Might be useful when combined with slide effect (if possible?)
// Did not end up utilising this function
function toggleFunction() {
    var element = document.getElementById("toggleButton");
    if (element.className == "inactive") {
        element.className = "active";
    } else {
        element.className = "inactive"
    }
}

// Collapsible Boxes //
// declaring variables, var collapsed is setting a class as a variable
var collapsed = document.getElementsByClassName("collapsing");
var i;

//for loop with an if else statement adding a toggle button and creating the box on a click
for (i=0; i< collapsed.length;i++) {
    collapsed[i].addEventListener("click", function() {
        this.classList.toggle("open"); // this. allows this effect to be used else where, specifying this specific instance
        var content = this.nextElementSibling; // 'connects' the two boxes together
        if (content.style.maxHeight) {
            content.style.maxHeight = null; //sets the height of the content box
        }   else {
            content.style.maxHeight = content.scrollHeight + "px"; // expands the content box
        }
    });
}




  