var col = document.getElementById("col");
var painterEl = document.getElementById("painter");
var productEl = document.getElementById("product");
var productSec = document.getElementById("type1");
var painterSec = document.getElementById("type2");
var vl = document.getElementById("vl");
var scroll = document.getElementById("scroll");

window.onscroll = function() {toggleVisibility()}

function toggleVisibility() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        col.style.visibility = "visible";
        col.classList.add("trans");
        disableScroll();
    }
};

window.onload = function() {
    productSec.style.display = "none";
    painterSec.style.display = "none";
    
}

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

function changeActivity(event) {
    var activeElement = document.getElementsByClassName("active")[0];
    window.scrollTo(0, 0);
    if ((event.target.classList.contains("active")) == false) {
        activeElement.classList.remove("active");
        event.target.classList.add("active");
    }
    
    if (event.target.id == "painter"){
        showPainting();
        
        if (vl.classList.contains("product")) { vl.classList.remove("product");
        }
        vl.classList.add("painter");
    } else {
        showProduct();
        hideTransible();
        
        if (vl.classList.contains("painter")) { vl.classList.remove("painter");
        }
        vl.classList.add("product");
    }
}

window.onload = function() {
    var path = window.location.href;
    if (path.indexOf("#paintings") > -1){
        showPainting();
        painterEl.classList.add("active");
        productEl.classList.remove("active");
    } else {
        showProduct();
        productEl.classList.add("active");
        painterEl.classList.remove("active");
        hideTransible();
    }
}

function hideTransible() {
    
    col.style.visibility = "hidden";
    if (col.classList.contains("trans")) {
        col.classList.remove("trans");
    }
}

function showProduct() {
    if (!productSec.classList.contains("trans1")) {
        productSec.classList.add("trans1");
    }
    if (painterSec.classList.contains("trans1")) {
        painterSec.classList.remove("trans1");
    }
    productSec.style.visibility = "visible";
    productSec.style.display = "block";
    painterSec.style.display = "none";
    vl.style.backgroundPosition = "top left";
    loadScroll();
}

function showPainting() {
    if (!painterSec.classList.contains("trans1")) {
        painterSec.classList.add("trans1");
    }
    if (productSec.classList.contains("trans1")) {
        productSec.classList.remove("trans1");
    }
    painterSec.style.visibility = "visible";
    productSec.style.display = "none";
    painterSec.style.display = "block";
    vl.style.backgroundPosition = "bottom left";
}

function loadScroll() {
    if (scroll.classList.contains("transout")) {
        scroll.classList.remove("transout");
    }
    scroll.classList.add("moveupdown");
    scroll.style.visibility = "visible";
}

function disableScroll() {
    if (scroll.classList.contains("moveupdown")) {
        scroll.classList.remove("moveupdown");
    }
    scroll.classList.add("transout")
    scroll.style.visibility = "hidden";
    
}
