var img = document.getElementById("ui")
var img2 = document.getElementById("arrows")

img.onmouseover = function(){bigImg()};
img.addEventListener("mouseover", bigImg());

function bigImg() {
    img2.style.visibility = "visible";
    img2.classList.add("trans");
}
