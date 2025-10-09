//store number of times order button is clicked for each product in local Storage

//populate grid with menu cards
makeMenuCard(menu);

// create an event for each button click on each product
//  -- count the amount of times the button has been clicked for each product
//  -- display as an alert
//  -- store count in the local storage
orderBtn = document.querySelectorAll("figure > button.orderBtn"); // making sure that all buttons are selected

//function found in decault.js
makeClickEventToPage(orderBtn, "order.html");


/*---------------------------------------------------------------------------------------------------------- 
Function: makeMenuCard(menuArray)
Purpose: create menu cards which will populate in the HTML element specified in the function.
Description: Has one arguement, "menuArray" which is the name of the obj you want to iterate through.
             It will populate the HTML element with menu cards when called.
------------------------------------------------------------------------------------------------------------*/
function makeMenuCard(menuArray) {
    
    //select the div
    const menuDiv = document.querySelector(".menuCards");

    //empty the div
    menuDiv.innerHTML = "";

    //populate the div
    for (let i = 0; i < menuArray.length; i++) {
        const menuItem = menuArray[i];
        menuDiv.innerHTML += `
            <figure>
                <img src="${menuItem.photoURL}" alt="${menuItem.itemName}" loading="lazy">
                <h3>${menuItem.itemName}</h3>
                <ul>
                    <li><strong>Description:</strong> ${menuItem.description} </li>
                    <li><strong>Ingredients:</strong> ${menuItem.ingredients} </li>
                    <li><strong>Quantity:</strong> ${menuItem.quantity} </li>
                </ul>
                <h4>PRICE: $ ${menuItem.price.toFixed(2)}</h4>
                <button class="orderBtn">Order Now</button>
            </figure>`;
    }
}