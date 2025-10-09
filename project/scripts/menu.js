//menu items array
const menu = [
    {
        id: 'bnbrd-001',
        itemName: 'Plain Banana Bread',
        description:'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread.',
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
            'Citrus Fruit Juice', 'Raisins', 'Walnuts','Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 18.00
    },
    {
        id: 'bnbrd-003',
        itemName: 'Choco Chip and Walnuts Banana Bread',
        description: 'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread with Semi-sweet Chocolate Chips and Walnuts inside and as toppings.',
        photoURL: 'images/choco-walnut.webp', 
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Choco Chips','Walnuts','Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 20.00
    },
    {
        id: 'bnbrd-004',
        itemName: ' Blueberry with Streusel Topping Banana Bread',
        description: 'A full loaf (5" x 9" loaf) of moist and delicious homemade Banana Bread with Crunchy Streusel Topping and blueberries inside.',
        photoURL: 'images/blueberry-streusel.webp', 
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Blueberries', 'Walnuts', 'Butter','Baking Powder', 'Baking Soda', 'Salt'],
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
            'Eggs', 'Breadcrumbs', 'Cream Cheese', 'Cheese','Butter', 'Icing Sugar', 'Salt', 'Yeast'],
        quantity: 1,
        price: 6.00
    },

];

//store number of times order button is clicked for each product in local Storage


//populate grid with menu cards
//select the div
const menuDiv = document.querySelector(".menuCards");

//empty the div
menuDiv.innerHTML = "";

//populate the div
for (let i = 0; i < menu.length; i++) {
    const menuItem = menu[i];
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
                <button class="menuBtn" id="menu${i}">Order Now</button>
            </figure>`;
}

// create an event for each button click on each product
//  -- count the amount of times the button has been clicked for each product
//  -- display as an alert
//  -- store count in the local storage