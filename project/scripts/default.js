const year = document.querySelector("#currentyear");
const modification = document.querySelector("#lastModified");
const today = new Date();
const modificationDate = document.lastModified;

//get current year
year.innerHTML = `<span id="currentyear">&copy ${today.getFullYear()}</span>`;

//Get last modification date and time
modification.innerHTML = `<p id="lastModified">Last Modified: ${modificationDate}</p>`;

// Hamburger menu
const burgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

//add click event for hamburger button
burgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    burgerButton.classList.toggle("open");
});

//add click events for buttons:
const aboutBtn = document.querySelectorAll('.aboutBtn');
const contactBtn = document.querySelectorAll('.contactBtn');
const menuBtn = document.querySelectorAll('.menuBtn');
let orderBtn = document.querySelectorAll('.orderBtn');

makeClickEventToPage(aboutBtn, "about.html");
makeClickEventToPage(contactBtn, "contact.html");
makeClickEventToPage(menuBtn, "menu.html");
makeClickEventToPage(orderBtn, "order.html");


/*---------------------------------------------------------------------------------------------------------- 
Function: makeClickEventToPage(button, page)
Purpose: makes a click event for a button to go to another html page
Description: Has two arguements, "button" which is the name of the DOM element you want to have
            a click event added. "page" is the html page you want it to go to
------------------------------------------------------------------------------------------------------------*/
function makeClickEventToPage(button, page) {

    if (button) { // if button(s) exists
        //make a click event
        button.forEach(btn => {
            btn.addEventListener('click', () => {
                window.location.href = page;
            });
        });
    }

}
