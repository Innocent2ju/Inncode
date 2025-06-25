image = document.querySelectorAll(".slides img");
slideindex = 0

document.addEventListener("DOMContentLoaded", initial)
function initial(){
    image[slideindex].classlist.add("displayslide");
}