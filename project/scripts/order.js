//make options based on array items
makeOptions(menu, "#products")

const selection = document.querySelector('#products');
const addProdBtn = document.querySelector('button');
const list = document.querySelector('#list');


//get product list
let orderList = getOrderList() || [];

orderList.forEach(item => {
    displayList(item);
});

//click event listener to "Add Product" button
addProdBtn.addEventListener('click', function () {
    if (selection.value.trim() !== '') {

        displayList(selection.value);
        orderList.push(selection.value); //add products to array
        setOrderList(); // update local storage with new array

        //clean up input for the user
        selection.value = "";
        selection.focus();
    }
    else {
        //focus on the input
        selection.focus();
    }
});


/*---------------------------------------------------------------------------------------------------------- 
Function: displayList(item)
Purpose: builds a chapter list and calls a delete function to remove a chapter in both
        the array and the local Storage
Description: Has one arguement, "item" which is the input where the user types in their desired
        chapter of the Book of Mormon.
------------------------------------------------------------------------------------------------------------*/
function displayList(item) {
    //create an li element
    const li = document.createElement('li');

    //create a button
    const deleteButton = document.createElement('button');

    //populate li element with input value
    li.textContent = item;

    //populate button textContent with an X
    deleteButton.textContent = '⛌';

    //append li element with button
    li.append(deleteButton);

    //append li element to the unordered list in the HTML 
    list.append(li);

    //creating a click event listener for the DELETE button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteProd(li.textContent); // function to remove chapter from array and the localStorage
        selection.focus();
    });
}

/*---------------------------------------------------------------------------------------------------------- 
Function: setOrderList()
Purpose: sets the localStorage item that you named and stringifies the array
Description: no arguements
------------------------------------------------------------------------------------------------------------*/
function setOrderList() {
    localStorage.setItem('orderListArray', JSON.stringify(orderList));
}

/*---------------------------------------------------------------------------------------------------------- 
Function: getOrderList()
Purpose: gets the localStorage item and returns to an awaiting array
Description: no arguements
------------------------------------------------------------------------------------------------------------*/
function getOrderList() {
    return JSON.parse(localStorage.getItem('orderListArray'));
}

/*---------------------------------------------------------------------------------------------------------- 
Function: deleteProd(items)
Purpose: deletes a product item in the array and updates the local Storage item
Description: Has one argument called 'item', which is the array of product items
------------------------------------------------------------------------------------------------------------*/
function deleteProd(items) {
    items = items.slice(0, items.length - 1); // get rid of the last character
    orderList = orderList.filter(item => item !== items); // return everything except the chapter to be removed
    setOrderList();
}

/*---------------------------------------------------------------------------------------------------------- 
Function: makeOptions(menuArray)
Purpose: create menu items which will populate in a specific "select" tag in the DOM.
Description: Has one arguement, "menuArray" which is the name of the obj you want to iterate through.
             It will populate the HTML element with menu items when called.
------------------------------------------------------------------------------------------------------------*/
function makeOptions(menuArray, container) {

    //select the "select" tag
    const selectContainer = document.querySelector(container);

    //populate the div
    for (let i = 0; i < menuArray.length; i++) {
        const menuItem = menuArray[i];
        selectContainer.innerHTML += `
            <option value="${menuItem.id}">${menuItem.itemName}</option>`;
    }
}