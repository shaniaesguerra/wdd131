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
        photoURL: 'images/raisin-walnut.webp', 
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Raisins', 'Walnuts','Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 18.00
    },
    {
        id: 'bnbrd-003',
        itemName: 'Choco Chip and Walnuts Banana Bread',
        photoURL: 'images/choco-walnut.webp', 
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Choco Chips','Walnuts','Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 20.00
    },
    {
        id: 'bnbrd-004',
        itemName: ' Blueberry with Streusel Topping Banana Bread',
        photoURL: 'images/blueberry-streusel.webp', 
        ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Vegetable Oil',
            'Citrus Fruit Juice', 'Blueberries', 'Walnuts', 'Butter','Baking Powder', 'Baking Soda', 'Salt'],
        quantity: 1,
        price: 22.00
    },
    {
        id: 'fbrd-001',
        itemName: 'Spanish Bread',
        photoURL: 'images/spanish-bread.webp', 
        ingredients: ['Bread Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Condensed Milk', 'Salt', 'Yeast'],
        quantity: 5,
        price: 7.00
    },
    {
        id: 'fbrd-002',
        itemName: 'Pandesal',
        photoURL: 'images/pandesal.webp', 
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Salt', 'Yeast'],
        quantity: 12,
        price: 7.00
    },
    {
        id: 'fbrd-003',
        itemName: 'Classic Ensaymada (6pcs)',
        photoURL: 'images/classic-multi.webp', 
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Salt', 'Yeast'],
        quantity: 6,
        price: 15.00
    },
    {
        id: 'fbrd-004',
        itemName: 'Classic Ensaymada (1pc)',
        photoURL: 'images/classic-one.webp', 
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Salt', 'Yeast'],
        quantity: 1,
        price: 4.00
    },
    {
        id: 'fbrd-005',
        itemName: 'Cream Cheese Ensaymada (6pcs)',
        photoURL: 'images/cream-cheese-multi.webp', 
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Cream Cheese', 'Cheese', 'Butter', 'Icing Sugar', 'Salt', 'Yeast'],
        quantity: 6,
        price: 25.00
    },
    {
        id: 'fbrd-006',
        itemName: 'Cream Cheese Ensaymada (1pc)',
        photoURL: 'images/cream-cheese-one.webp', 
        ingredients: ['Flour', 'Milk', 'Sugar', 'Margarine',
            'Eggs', 'Breadcrumbs', 'Cream Cheese', 'Cheese','Butter', 'Icing Sugar', 'Salt', 'Yeast'],
        quantity: 1,
        price: 6.00
    },

];

//store number of times order button is clicked in local Storage


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
                <a href="order.html"><button>Order Now</button></a>
            </figure>`;
}