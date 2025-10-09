/*---------------------------------------------------------------------------------------------------------- 
Function: getProductData(id)
Purpose: callback function to find the product object using its ID
Description: Has one arguement, "id" which contains the product ID
------------------------------------------------------------------------------------------------------------*/
function getProductData(id) {
    return menu.find(item => item.id === id);
}


/*---------------------------------------------------------------------------------------------------------- 
Function: displayList(itemTxt, itemId)
Purpose: builds a order list and calls a delete function to remove a product item in both
        the array and the local Storage
Description: Has two arguements, "itemTxt" which contains the name of the product
        "itemId" which contains the ID of the product.
------------------------------------------------------------------------------------------------------------*/
function displayList(itemTxt, itemId) {
    //create an li element
    const li = document.createElement('li');

    // create an attribute to store the ID for easy deletion
    li.setAttribute('data-prod-id', itemId);

    //create a button
    const deleteButton = document.createElement('button');

    //populate li element with input value
    li.textContent = itemTxt;

    //populate button textContent with an X
    deleteButton.textContent = '⛌';

    //append li element with button
    li.append(deleteButton);

    //append li element to the unordered list in the HTML 
    list.append(li);

    //creating a click event listener for the DELETE button
    deleteButton.addEventListener('click', function () {
        const prodIdToDelete = li.getAttribute('data-prod-id'); //get ID from the list element
        list.removeChild(li);
        deleteProd(prodIdToDelete); // function to remove chapter from array and the localStorage
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
Function: deleteProd(idToDelete)
Purpose: deletes a product item in the array and updates the local Storage item
Description: Has one argument called 'idToDelete', which should contain the id product item.
------------------------------------------------------------------------------------------------------------*/
function deleteProd(idToDelete) {
    orderList = orderList.filter(item => item !== idToDelete); // return everything except the product to be removed
    setOrderList();
}

/*---------------------------------------------------------------------------------------------------------- 
Function: makeOptions(menuArray, container)
Purpose: create menu items which will populate in a specific "select" tag in the DOM.
Description: Has two arguements, "menuArray" which is the name of the obj you want to iterate through.
             It will populate the HTML element "container" with menu items when called.
------------------------------------------------------------------------------------------------------------*/
function makeOptions(menuArray, container) {

    //select the "select" tag
    const selectContainer = document.querySelector(container);

    //populate the div
    for (let i = 0; i < menuArray.length; i++) {
        const menuItem = menuArray[i];
        selectContainer.innerHTML += `
            <option value="${menuItem.id}">${menuItem.itemName} (Qty: ${menuItem.quantity})= $${menuItem.price.toFixed(2)}</option>`;
    }
}

//menu items array
const menu = [
    {
        id: 'bnbrd-001',
        itemName: 'Plain Banana Bread',
        description: 'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread.',
        photoURL: 'images/plain-banana.webp',
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 15.00
    },
    {
        id: 'bnbrd-002',
        itemName: 'Raisin and Walnuts Banana Bread',
        description: 'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread with Raisins and Walnuts inside and as toppings.',
        photoURL: 'images/raisin-walnut.webp',
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Raisins', 'Walnuts', 'Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 18.00
    },
    {
        id: 'bnbrd-003',
        itemName: 'Choco Chip and Walnuts Banana Bread',
        description: 'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread with Semi-sweet Chocolate Chips and Walnuts inside and as toppings.',
        photoURL: 'images/choco-walnut.webp',
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Choco Chips', 'Walnuts', 'Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 20.00
    },
    {
        id: 'bnbrd-004',
        itemName: ' Blueberry with Streusel Topping Banana Bread',
        description: 'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread with Crunchy Streusel Topping and blueberries inside.',
        photoURL: 'images/blueberry-streusel.webp',
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Blueberries', 'Walnuts', 'Butter', 'Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 22.00
    },
    {
        id: 'fbrd-001',
        itemName: 'Spanish Bread',
        description: 'A type of Filipino Bread Roll. It is made with soft fluffy bread and a buttery-sugar filling.',
        photoURL: 'images/spanish-bread.webp',
        ingredients: ['Bread Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Condensed Milk', 'Salt', 'Yeast'],
        quantity: 5,
        price: 7.00
    },
    {
        id: 'fbrd-002',
        itemName: 'Pandesal',
        description: "A type of Filipino Dinner Roll. It is made with soft fluffy bread using Tangzhong as a natural shelf-life extender. It's milky and sweet bread that can be made into a savory sandwhich or any sweet spread!",
        photoURL: 'images/pandesal.webp',
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Salt', 'Yeast'],
        quantity: 12,
        price: 7.00
    },
    {
        id: 'fbrd-003',
        itemName: 'Classic Ensaymada (6pcs)',
        description: "A type of Filipino sweet bread that has a Whipped Margarine and butter as topping. It's a Filipino classic that everyone loves! It could serve as a perfect present to someone else or a treat for yourself.",
        photoURL: 'images/classic-multi.webp',
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Salt', 'Yeast'],
        quantity: 6,
        price: 15.00
    },
    {
        id: 'fbrd-004',
        itemName: 'Classic Ensaymada (1pc)',
        description: "A type of Filipino sweet bread that has a Whipped Margarine and butter as topping. It's a Filipino classic that everyone loves! This is the perfect sweet treat for yourself.",
        photoURL: 'images/classic-one.webp',
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Salt', 'Yeast'],
        quantity: 1,
        price: 4.00
    },
    {
        id: 'fbrd-005',
        itemName: 'Cream Cheese Ensaymada (6pcs)',
        description: "A type of Filipino sweet bread that has Cream Cheese Frosting and Cheese as topping. It's a Filipino classic that everyone loves! It could serve as a perfect present to someone else or a treat for yourself.",
        photoURL: 'images/cream-cheese-multi.webp',
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Cream Cheese', 'Cheese', 'Butter', 'Icing Sugar', 'Salt', 'Yeast'],
        quantity: 6,
        price: 25.00
    },
    {
        id: 'fbrd-006',
        itemName: 'Cream Cheese Ensaymada (1pc)',
        description: "A type of Filipino sweet bread that has Cream Cheese Frosting and Cheese as topping. It's a Filipino classic that everyone loves! This is the perfect sweet treat for yourself.",
        photoURL: 'images/cream-cheese-one.webp',
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Cream Cheese', 'Cheese', 'Butter', 'Icing Sugar', 'Salt', 'Yeast'],
        quantity: 1,
        price: 6.00
    },

];

//make options based on array items
makeOptions(menu, "#products");

//To get order list:
const selection = document.querySelector('#products');
const addProdBtn = document.querySelector('#addProdBtn');
const list = document.querySelector('#list');


//get product list
let orderList = getOrderList() || [];

orderList.forEach(prodId => {
    const productData = getProductData(prodId);
    if (productData) {
        const displayText = `${productData.itemName} (Qty: ${productData.quantity})= $${productData.price.toFixed(2)}`;
        displayList(displayText, prodId);
    }
});

//click event listener to "Add Product" button
addProdBtn.addEventListener('click', function () {
    let selectedProd = selection.value;
    let selectedTxt = selection.options[selection.selectedIndex].text;

    if (selectedProd !== '') {

        displayList(selectedTxt, selectedProd);
        orderList.push(selectedProd); //add product to array
        setOrderList(); // update local storage with new array

        //reset
        selection.value = "";
    }
    else {
        alert("Select a valid product to add to your order list.");
    }
});
