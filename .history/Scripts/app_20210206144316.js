/* custom javaScript code goes here */

//IIFE - Immediately Invoked Function Expression
//AKA
//closure

"use strict";

(function()
{
    function Start()
    {
        function displayHome() {

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
        //paragraphOneElement.remove();

        //update
        //mainContent.firstElementChild.textContent = "welcome home!";

        mainContent.innerHTML = 
        `<h1 id="firstHeading" >Welcome to WEBD6201 - Lab1 </h1>
        <p id="paragraphOne">This is paragraph one</p>
        `;
        


        }

        function displayProjects() {
            
        }

        function displayServices() {
            
        }

        function displayAbout() {
            
        }

        function displayContact() {
            
        }

        console.log("App Started...");

        switch (document.title) {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
        }

        /*
        

        */




        
    }

    window.addEventListener("load",Start);
}

)();