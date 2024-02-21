/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

window.onload = function() {
    //??? why option not loading
let menu= document.getElementById("menu-select");
let currentOption=null;

//select menu:
if (menu.value === "1"){
    currentOption=1;
    console.log(currentOption);
} else if (menu.value === "2"){
    currentOption=2;
    console.log(currentOption);
} else if (menu.value === "0"){
    currentOption=0;
    console.log(currentOption);
}

if (currentOption === 1){
    //OPEN WINDOW GOLDEN RATIO
    document.getElementById("goldenRatio-container").style.display="block";
    document.getElementById("cartesian-container").style.display="none";
} else if (currentOption === 2){
        //OPEN WINDOW GRID
    document.getElementById("goldenRatio-container").style.display="none";
    document.getElementById("cartesian-container").style.display="block";
} else {
    console.log("nananan")
}

}