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

       

       
        let paragraphDiv = document.createElement('div');
        let paragraphThree = '<p id="paragraphThree" class="fs-7 fw-bold">this is third paragraph</P>';
         paragraphDiv.innerHTML=paragraphThree;


        //insertion before paragraph
        //newParagraph.before(paragraphDiv);


        //insertion after
        newParagraph.after(paragraphDiv);

        //deletion
        paragraphOneElement.remove();




        
    }

    window.addEventListener("load",Start);
}

)();