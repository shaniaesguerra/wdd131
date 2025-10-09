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

if (aboutBtn) {
    aboutBtn.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "about.html";
        });
    });
}

if (contactBtn) {
    contactBtn.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "contact.html";
        });
    });
}

if (menuBtn) {
    menuBtn.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "menu.html";
        });
    });
}

if (orderBtn) {
    orderBtn.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "order.html";
        });
    });
}


