/**
Source: 
Full screen code: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
*/

"use strict";
window.onload = (event) => {
//img array  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀ 

let ying1hua1ImgArray = [`assets/images/flora_half1-bendo_naturel.00_07_43_16.Still024.jpg`,`assets/images/flora_half1-bendo_naturel.00_07_47_19.Still008 copie.jpg`]


//top nav menu  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀ 
    document.getElementById("springBtn").addEventListener("click", function(){
        window.location.href="ying1hua1.html";
    });
    document.getElementById("winterBtn").addEventListener("click", function(){
        window.location.href="winter.html";
    });
    document.getElementById("summerBtn").addEventListener("click", function(){
        window.location.href="summer.html";
    });
    document.getElementById("fallBtn").addEventListener("click", function(){
        window.location.href="fall.html";
    });
    document.getElementById("yellowBtn").addEventListener("click", function(){
        window.location.href="huangsehua1.html";
    });

    // CONTROLLER PLAYER BUTTON  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀  ❀ ❀❀✿❀ ❀ ❀❁❀❀❀  ❀❀✿❀❀❀❀ 
let rightButton= document.querySelector(".rightarrow");
let leftButton= document.querySelector(".leftarrow");
let currentImg=0;

leftButton.addEventListener("click", function(){
    currentImg++;
    if (currentImg > ying1hua1ImgArray.length-1){
        currentImg = 0;
    }
    console.log(currentImg);
    changeImg(ying1hua1ImgArray[currentImg]);

});
rightButton.addEventListener("click", function(){
    currentImg--;
    if (currentImg<=-1){
        currentImg=ying1hua1ImgArray.length-1;
    }
    console.log(currentImg);
    changeImg(ying1hua1ImgArray[currentImg]);
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
