




var myelement = document.getElementById("profile-pic");
var myImgs = ["img/cartoonpic.jpg", "img/dpic.jpeg", "img/dania-pic.jpg"]; 
var currentIndex = 0;

function changeImage() {
    'use strict';

    setInterval(function () {
        myelement.src = myImgs[currentIndex];
        currentIndex = (currentIndex + 1) % myImgs.length;
    }, 3000); 
}

changeImage();


function changeimage() {

    //var imageElement = document.getElementsByClassName("image1");
    var imageElement = document.getElementById("image");
    
    var newimg = document.createElement("img");
    newimg.src = "img/ti.jpg";
    newimg.alt = "new image";
    newimg.width = imageElement.width;
    newimg.height = imageElement.height;
    
    imageElement.parentNode.replaceChild(newimg, imageElement);
    //const parent = document.getElementById("image");
    //parent.appendChild(newimg);


}

var contactorm = document.getElementById("contactForm");
var successmsg = document.querySelector(".msg");
contactorm.addEventListener("submit", function (e) {

    e.preventDefault();
    successmsg.style.display = "block";
    contactorm.reset();
    setTimeout(function () {
        successmsg.style.display = "none";
    }, 3000);
});




var forminput = document.querySelectorAll(".form-input");
forminput.forEach(function (input) {
    input.addEventListener("change", function () {
        input.style.backgroundColor = "deeppink";
        input.style.color = "#e8f0fe";

    });
});




//var downloadButton = document.getElementById("downloadButton");
//var resumeLink = document.getElementById("link-resume");

//downloadButton.addEventListener("click", () => {
//    resumeLink.click();
//});








    function handleDownloadButtonClick() {
            var resumeLink = document.getElementById("link-resume");
    resumeLink.click();
        }

    var downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", handleDownloadButtonClick);
