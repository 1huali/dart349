/**
Source: 
Full screen code: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
*/

"use strict";
window.onload = (event) => {
//img array  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀ 

let ying1hua1ImgArray = [`assets/images/flora_half1-bendo_naturel.00_07_43_16.Still024.jpg`,`assets/images/flora_half1-bendo_naturel.00_07_47_19.Still008 copie.jpg`]
let lan2se4hua1ImgArray = [`assets/images/flora_half1-bendo_naturel.00_17_02_10.Still011 copie.jpg`,`assets/images/flora_half1-bendo_naturel.00_16_43_07.Still023.jpg`];
let unknownhua1ImgArray = [`assets/images/flora_half1-bendo_naturel.00_11_57_06.Still025.jpg`,`assets/images/flora_half1-bendo_naturel.00_26_25_03.Still027 copie.jpg`];
let fen3hong2se4hua1ImgArray =[`assets/images/flora_half1-bendo_naturel.00_21_56_10.Still026.jpg`,`assets/images/flora_half1-bendo_naturel.00_21_56_10.Still026.jpg`,`assets/images/flora_half1-bendo_naturel.00_22_15_09.Still013 copie.jpg`,`assets/images/flora_half1-bendo_naturel.00_42_44_11.Still028 copie.jpg`]
let huangsehua1ImgArray = [`assets/images/flora_half1-bendo_naturel.00_44_24_03.Still029 copie.jpg`,`assets/images/flora_half1-bendo_naturel.00_44_16_12.Still020.jpg`];

let currentPage = undefined;
// currentPage = ying1hua1ImgArray;

//top nav menu  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀ 
    document.getElementById("springBtn").addEventListener("click", function(){
        window.location.href="ying1hua1.html";
        currentPage = ying1hua1ImgArray;
localStorage.setItem('currentPage', JSON.stringify(currentPage));
    });
    document.getElementById("winterBtn").addEventListener("click", function(){
        window.location.href="fen3hong2se4hua1.html";
        currentPage = fen3hong2se4hua1ImgArray;
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
    });
    document.getElementById("summerBtn").addEventListener("click", function(){
        window.location.href="unknown-hua1.html";
        currentPage = unknownhua1ImgArray;
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
    });
    document.getElementById("fallBtn").addEventListener("click", function(){
        window.location.href="lan2se4hua1.html";
        currentPage = lan2se4hua1ImgArray;
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
    });
    document.getElementById("yellowBtn").addEventListener("click", function(){
        window.location.href="huangsehua1.html";
        currentPage = huangsehua1ImgArray;
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
    });

    let storedCurrentPage = localStorage.getItem('currentPage');
if (storedCurrentPage) {
    currentPage = JSON.parse(storedCurrentPage);
} else {
    // Set a default value if currentPage is not stored
    currentPage = undefined;
}

    // CONTROLLER PLAYER BUTTON  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀ 
let rightButton= document.querySelector(".rightarrow");
let leftButton= document.querySelector(".leftarrow");
let currentImg=0;

leftButton.addEventListener("click", function(){
    currentImg++;
    if (currentImg > currentPage.length-1){
        currentImg = 0;
    }
    console.log(currentPage);
    changeImg(currentPage[currentImg]);

});
rightButton.addEventListener("click", function(){
    currentImg--;
    if (currentImg<=-1){
        currentImg=currentPage.length-1;
    }
    changeImg(currentPage[currentImg]);
});
//?? do I have to code for each page or there is a generic way to go about the code


function changeImg(newLink){
    let img = document.querySelector('.myimage'); 
    // Change the href attribute
    img.src = newLink;
}

//full screen option button  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  
let elem= document.querySelector(".myimage");

let fullscreenButton = document.querySelector(".fullscreen-button");


fullscreenButton.addEventListener("click", function(){
      if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
});


} //end onLoad
