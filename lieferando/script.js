function init(){
    createFavoriteFoodMenuCard();
    createSaladMenuCard();
    createPizzaMenuCard();
    createPastaMenuCard();
    createDessertMenuCard();
    createDrinkMenuCard();
}

function createFavoriteFoodMenuCard(){
    let favFoodContent = document.getElementById(`favfood`);
    favFoodContent.innerHTML = '';

    for (let i = 0; i < favoriteFood.length; i++){
        favFoodContent.innerHTML +=  `
        <div class="food-content bg1">
        <div class="food-name-container"><h3>${favoriteFood[i]['food']}</h3></div>
        <div class="food-ingredient-container">${favoriteFood[i]['ingredients']}</div>
        <div class="food-price-container">${favoriteFood[i]['price']}€</div>
        <div><img onclick="addFavFoodToBasket()" class="add-basket-btn bg1" src="img/basket.png" alt=""></div>
        </div>`;
    } 
}

function createSaladMenuCard(){
    let saladContent = document.getElementById('saladMenu');
    saladContent.innerHTML = '';

    for (let i = 0; i < salad.length; i++){
        saladContent.innerHTML +=  `
        <div class="food-content bg1">
        <div class="food-name-container"><h3>${salad[i]['food']}</h3></div>
        <div class="food-ingredient-container">${salad[i]['ingredients']}</div>
        <div class="food-price-container">${salad[i]['price']}€</div>
        <div><img class="add-basket-btn bg1" src="img/basket.png" alt=""></div>
        </div>`;
    } 
}

function createPizzaMenuCard(){
    let pizzaContent = document.getElementById('pizzaMenu');
    pizzaContent.innerHTML = '';

    for (let i = 0; i < pizza.length; i++){
        pizzaContent.innerHTML +=  `
        <div class="food-content bg1">
        <div class="food-name-container"><h3>${pizza[i]['food']}</h3></div>
        <div class="food-ingredient-container">${pizza[i]['ingredients']}</div>
        <div class="food-price-container">${pizza[i]['price']}€</div>
        <div><img class="add-basket-btn bg1" src="img/basket.png" alt=""></div>
        </div>`;
    } 
}

function createPastaMenuCard(){
    let pastaContent = document.getElementById('pastaMenu');
    pastaContent.innerHTML = '';

    for (let i = 0; i < pasta.length; i++){
        pastaContent.innerHTML +=  `
        <div class="food-content bg1">
        <div class="food-name-container"><h3>${pasta[i]['food']}</h3></div>
        <div class="food-ingredient-container">${pasta[i]['ingredients']}</div>
        <div class="food-price-container">${pasta[i]['price']}€</div>
        <div><img class="add-basket-btn bg1" src="img/basket.png" alt=""></div>
        </div>`;
    } 
}

function createDessertMenuCard(){
    let dessertContent = document.getElementById('dessertMenu');
    dessertContent.innerHTML = '';

    for (let i = 0; i < dessert.length; i++){
        dessertContent.innerHTML +=  `
        <div class="food-content bg1">
        <div class="food-name-container"><h3>${dessert[i]['food']}</h3></div>
        <div class="food-ingredient-container">${dessert[i]['ingredients']}</div>
        <div class="food-price-container">${dessert[i]['price']}€</div>
        <div><img class="add-basket-btn bg1" src="img/basket.png" alt=""></div>
        </div>`;
    } 
}

function createDrinkMenuCard(){
    let drinkContent = document.getElementById('drinkMenu');
    drinkContent.innerHTML = '';

    for (let i = 0; i < drinks.length; i++){
        drinkContent.innerHTML +=  `
        <div class="food-content bg1">
        <div class="food-name-container"><h3>${drinks[i]['food']}</h3></div>
        <div class="food-ingredient-container">${drinks[i]['ingredients']}</div>
        <div class="food-price-container">${drinks[i]['price']}€</div>
        <div><img class="add-basket-btn bg1" src="img/basket.png" alt=""></div>
        </div>`;
    } 
}


