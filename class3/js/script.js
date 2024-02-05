/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
window.onload = (event) => {

    document.getElementById("springBtn").addEventListener("click", function(){
        window.open("spring.html");
    });
    document.getElementById("winterBtn").addEventListener("click", function(){
        window.open("winter.html");
    });
    document.getElementById("summerBtn").addEventListener("click", function(){
        window.open("summer.html");
    });
    document.getElementById("fallBtn").addEventListener("click", function(){
        window.open("fall.html");
    });


} //end onLoad
