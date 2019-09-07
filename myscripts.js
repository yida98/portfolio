var col = document.getElementById("col");

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
    }
}

window.onload = function() {
    
    var path = window.location.href;
    if (path.indexOf("#paintings") > -1){
        document.getElementById("painter").classList.add("active");
        document.getElementById("product").classList.remove("active");
    } else {
        document.getElementById("product").classList.add("active");
        document.getElementById("painter").classList.remove("active");
    }
}
