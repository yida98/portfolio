var col = document.getElementById("col");
var painterEl = document.getElementById("painter");
var productEl = document.getElementById("product");
var productSec = document.getElementById("type1");
var painterSec = document.getElementById("type2");

window.onscroll = function() {toggleVisibility()}

function toggleVisibility() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        col.style.visibility = "visible";
        col.classList.add("trans");
    }
};

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

function changeActivity(event) {
    var activeElement = document.getElementsByClassName("active")[0];
    if ((event.target.classList.contains("active")) == false) {
        activeElement.classList.remove("active");
        event.target.classList.add("active");
    }
    
    if (event.target.id == "painter"){
        document.getElementById("type1").style.display = "none";
        document.getElementById("type2").style.display = "block";
    } else {
        document.getElementById("type1").style.display = "block";
        document.getElementById("type2").style.display = "none";
        hideTransible();
    }
}

window.onload = function() {
    var path = window.location.href;
    if (path.indexOf("#paintings") > -1){
        painterEl.classList.add("active");
        painterSec.classList.add("trans1")
        productEl.classList.remove("active");
        if (productSec.classList.contains("trans1")) {
            productSec.classList.remove("trans1")
        }
    } else {
        productEl.classList.add("active");
        hideTransible();
        productSec.classList.add("trans1")
        
        painterEl.classList.remove("active");
        if (painterSec.classList.contains("trans1")) {
            painterSec.classList.remove("trans1")
        }
    }
}

function hideTransible() {
    
    col.style.visibility = "hidden";
    if (col.classList.contains("trans")) {
        col.classList.remove("trans");
    }
}
