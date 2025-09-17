const year = document.querySelector("#currentyear");
const modification = document.querySelector("#lastModified");
const today = new Date();
const modificationDate = document.lastModified;

//Get last modified date and time ; get current year
year.innerHTML = `<span id="currentyear">&copy ${today.getFullYear()}</span>`;
modification.innerHTML = `<p id="lastModified">Last Modified: ${modificationDate}</p>`;