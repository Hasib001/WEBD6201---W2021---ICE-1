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
        
        let paragraphOneElement=document.getElementById("paragraphOne");

        paragraphOneElement.textContent=paragraphOneText;
        paragraphOneElement.className="fs-5";
        
        //step 1. document.create element
        let newParagraph = document.createElement("p");
        //step 2. configure element
        newParagraph.setAttribute("id","paragraphTwo");
        newParagraph.textContent="...and this is paragraph two";

        //step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
            
        //step 4. Add/Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className="fs-6";

        //let paragraphThree = `<p class="fs-7 fw-bold"> this is the third paragraph</p>`;

        //mainContent.innerHTML=paragraphThree;
        let paragraphDiv = document.createElement('div');
        let paragraph3 = '<p id="paragraphThree" class="fs-7 fw-bold">this is third paragraph</P>'
        let paragraphDiv.innerHTML=paragraphThree;


        //insertion
        newParagraph.before(paragraphDiv);



        
    }

    window.addEventListener("load",Start);
}

)();