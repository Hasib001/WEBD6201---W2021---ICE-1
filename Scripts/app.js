/* custom javaScript code goes here */

//IIFE - Immediately Invoked Function Expression
//AKA
//closure

(function()
{
    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load",Start);
}

)();