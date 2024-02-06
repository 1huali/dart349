/**
Source: 
Full screen code: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
*/

"use strict";
window.onload = (event) => {

    document.getElementById("springBtn").addEventListener("click", function(){
        window.location.href="spring.html";
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

    // CONTROLLER PLAYER BUTTON: 
let rightButton= document.querySelector(".rightarrow");
let leftButton= document.querySelector(".leftarrow");
rightButton.addEventListener("click", function(){
    console.log("hello");
});
leftButton.addEventListener("click", function(){
    console.log("hello");
});

//full screen option button : 
let elem= document.querySelector(".myimage");

let fullscreenButton = document.querySelector(".fullscreen-button");


fullscreenButton.addEventListener("click", function(){
    // openFullscreen();
    console.log("clicekd")
      if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
});

//     function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }


} //end onLoad
