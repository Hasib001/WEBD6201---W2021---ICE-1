/* custom javaScript code goes here */

//IIFE - Immediately Invoked Function Expression
//AKA
//closure

"use strict";

(function()
{
    function Start()
    {
        console.log("App Started...");
        let paragraphOneText ="This is a simple site to demonstrate DOM Manipulation for ICE 1";
        
        let paragraphOneElement=document.createElementById("paragraphOne");

        console.log(paragraphOneElement);
    }

    window.addEventListener("load",Start);
}

)();