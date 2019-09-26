var img = document.getElementById("ui")
var img2 = document.getElementById("arrows")
var theSec = document.getElementById("secimg")

theSec.onmouseover = function() {bigImg()}
//img.addEventListener("mouseover", bigImg())

function bigImg() {
    img2.style.visibility = "visible";
    img2.classList.add("trans");
}
