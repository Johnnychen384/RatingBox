const ratingBtnOne = document.getElementById('ratingOne');
const ratingBtnTwo = document.getElementById('ratingTwo');
const ratingBtnThree = document.getElementById('ratingThree');
const ratingBtnFour = document.getElementById('ratingFour');
const ratingBtnFive = document.getElementById('ratingFive');
const submitBtn = document.getElementById('submit-btn');
const backgroundShade = "#282828"


ratingBtnOne.addEventListener("click", () => {
    ratingBtnTwo.style.backgroundColor = backgroundShade;
    ratingBtnThree.style.backgroundColor = backgroundShade;
    ratingBtnFour.style.backgroundColor = backgroundShade;
    ratingBtnFive.style.backgroundColor = backgroundShade;
    ratingBtnOne.style.backgroundColor = "White";

});

ratingBtnTwo.addEventListener("click", () => {
    ratingBtnOne.style.backgroundColor = backgroundShade;
    ratingBtnThree.style.backgroundColor = backgroundShade;
    ratingBtnFour.style.backgroundColor = backgroundShade;
    ratingBtnFive.style.backgroundColor = backgroundShade;
    ratingBtnTwo.style.backgroundColor = "White";

});

ratingBtnThree.addEventListener("click", () => {
    ratingBtnOne.style.backgroundColor = backgroundShade;
    ratingBtnTwo.style.backgroundColor = backgroundShade;
    ratingBtnFour.style.backgroundColor = backgroundShade;
    ratingBtnFive.style.backgroundColor = backgroundShade;
    ratingBtnThree.style.backgroundColor = "White";
});

ratingBtnFour.addEventListener("click", () => {
    ratingBtnOne.style.backgroundColor = backgroundShade;
    ratingBtnTwo.style.backgroundColor = backgroundShade;
    ratingBtnThree.style.backgroundColor = backgroundShade;
    ratingBtnFive.style.backgroundColor = backgroundShade;
    ratingBtnFour.style.backgroundColor = "White";
});

ratingBtnFive.addEventListener("click", () => {
    ratingBtnOne.style.backgroundColor = backgroundShade;
    ratingBtnTwo.style.backgroundColor = backgroundShade;
    ratingBtnThree.style.backgroundColor = backgroundShade;
    ratingBtnFour.style.backgroundColor = backgroundShade;
    ratingBtnFive.style.backgroundColor = "White";
});


submitBtn.addEventListener('click', () => {
    document.getElementById('popUpWindow').style.display = 'block';
    document.getElementById('ratingContainer').style.opacity = 0.2;
});

document.getElementById('popUpBtn').addEventListener('click', () => {
    document.getElementById('popUpWindow').style.display = 'none';
    document.getElementById('ratingContainer').style.opacity = 1;
    ratingBtnOne.style.backgroundColor = backgroundShade;
    ratingBtnTwo.style.backgroundColor = backgroundShade;
    ratingBtnThree.style.backgroundColor = backgroundShade;
    ratingBtnFour.style.backgroundColor = backgroundShade;
    ratingBtnFive.style.backgroundColor = backgroundShade;
});
