function slider(e) {
    var sliderButtons = document.getElementsByClassName('slideButton');
    var sliderTexts = document.getElementsByClassName('sliderText');
    var index = e.target.id;

    sliderButtons[0].classList.remove("active");
    sliderButtons[1].classList.remove("active");
    sliderButtons[2].classList.remove("active");
    sliderTexts[0].style.display = "none";
    sliderTexts[1].style.display = "none";
    sliderTexts[2].style.display = "none";

    sliderTexts[index].style.display = "block";
    e.target.classList.add("active");
}