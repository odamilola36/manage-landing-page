let ham = document.querySelector("#ham");
let bye = document.querySelector("#close");
ham.onclick = bye.onclick = function () {
    ham.classList.toggle("mobile-menu");
    document.querySelector("header nav").classList.toggle("show-nav");
    bye.classList.toggle("mobile-menu");
}
function slide(num) {
    //goes to the slide with the given index in slides array
    //get the sliders too
    //
    let slides = document.getElementsByClassName("user");
    slides[event.target.dataset[0]].classList.toggle("hide");
    // console.dir(slides[0]);
}
let input = document.getElementById("input");
let toggleEmail = document.getElementById("email");
input.addEventListener("input", function () {
    if (!input.value.includes("@")) {
        toggleEmail.innerHTML = "Please enter a valid email";
        toggleEmail.style.color = "red";
    }
    else {
        toggleEmail.innerHTML = "";
    }
});


