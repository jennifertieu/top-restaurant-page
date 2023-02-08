export default function menu(){
    // create DOM elements
    const menuElem = document.createElement("section");
    menuElem.setAttribute("id", "menu");

    // heading
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    menuElem.appendChild(heading);
    
    const menuContainer = document.createElement("div");

    const rollsMenuItems = document.createElement("ul");
    rollsMenuItems.classList.add("menu-items");
    menuContainer.appendChild(rollsMenuItems);

    const sashimiMenuItems = document.createElement("ul");
    sashimiMenuItems.classList.add("menu-items");
    menuContainer.appendChild(sashimiMenuItems);

    // sushi name and ingredients
    const signatureRolls = {
        "Signature Yummy Roll": { ingredients: "spicy tuna, salmon, garlic chili oil, ponzu", price: "18"},
        "Sunshine": { ingredients: "spicy tuna, mango, avocado, wasabi vinaigrette", price: "16"},
        "Rainbow Dragon": { ingredients: "salmon, tuna, eel, avacado, cucumber", price: "19"},
        "Delicious Roll": { ingredients: "yellowtail, avocado, tuna, truffle vinaigrette", price: "17"},
    };

    const sashimi = {
        "Salmon": "6",
        "Tuna": "5",
        "Yellowtail": "5",
        "Scallop": "4",
    };

    // iterate through sushi
    for (const roll of signatureRolls){
        // create element
        let listElem = document.createElement("li");
        let rollName = document.createElement("div");
        rollName.classList.add("roll-name");
        rollName.textContent = roll;

        let rollPrice = document.createElement("span");
        rollPrice.classList.add("roll-price");
        rollPrice.textContent = signatureRolls[roll].price;
        rollName.appendChild(rollPrice)

        let rollIngredients = document.createElement("p");
        rollIngredients.classList.add("roll-ingredients");
        rollIngredients.textContent = signatureRolls[roll].ingredients;

        listElem.appendChild(rollName);
        listElem.appendChild(rollIngredients);

    }
    // add to menu
    
    menuElem.appendChild(menuItems);
    
    return menuElem;
}