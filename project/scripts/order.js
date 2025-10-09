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
                <button class="orderBtn">Order Now</button>
            </figure>`;
}