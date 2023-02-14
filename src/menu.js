export default function menu(){
    // create menu section 
    const menuElem = document.createElement("section");
    menuElem.setAttribute("id", "menu");

    // set menu heading
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    menuElem.appendChild(menuHeading);
    
    // create menu container for menu items 
    const menuContainer = document.createElement("div");

    function createMenuSection(title, items){
        const menuSection = document.createElement("div");
        
        const sectionHeading = document.createElement("h2");
        sectionHeading.textContent = title;
        menuSection.appendChild(sectionHeading);
        
        const menuItems = document.createElement("ul");
        menuItems.classList.add("menu-items");
        items.forEach((elem) => menuItems.appendChild(elem))

        menuSection.appendChild(menuItems);

        return menuSection;
    }

    // roll menu items
    const rollMenuSection = createMenuSection("Signature Rolls", createRollMenuItems());
    // sashimi menu items
    const sashimiMenuSection = createMenuSection("Sashimi", createSashimiMenuItems()); 

    menuContainer.appendChild(rollMenuSection);
    menuContainer.appendChild(sashimiMenuSection);
    
    function createRollMenuItems(){
        const menuItems = [];
        // sushi name and ingredients
        const signatureRolls = {
            "Signature Yummy Roll": { ingredients: "spicy tuna, salmon, garlic chili oil, ponzu", price: "18"},
            "Sunshine": { ingredients: "spicy tuna, mango, avocado, wasabi vinaigrette", price: "16"},
            "Rainbow Dragon": { ingredients: "salmon, tuna, eel, avacado, cucumber", price: "19"},
            "Delicious Roll": { ingredients: "yellowtail, avocado, tuna, truffle vinaigrette", price: "17"},
        };
        // iterate through sushi
        for (const roll in signatureRolls){
            let listElem = document.createElement("li");
            let name = document.createElement("div");
            name.classList.add("menu-name");
            name.textContent = roll;

            let price = document.createElement("span");
            price.classList.add("menu-price");
            price.textContent = signatureRolls[roll].price;
            name.appendChild(price)

            let ingredients = document.createElement("p");
            ingredients.classList.add("menu-ingredients");
            ingredients.textContent = signatureRolls[roll].ingredients;

            listElem.appendChild(name);
            listElem.appendChild(ingredients);

            menuItems.push(listElem);
        }

        return menuItems;
    }

    function createSashimiMenuItems(){
        const menuItems = [];
        const sashimi = {
            "Salmon": "6",
            "Tuna": "5",
            "Yellowtail": "5",
            "Scallop": "4",
        };

        for (const item in sashimi){
            let listElem = document.createElement("li");
            let name = document.createElement("div");
            name.classList.add("menu-name");
            name.textContent = item;

            let price = document.createElement("span");
            price.classList.add("menu-price");
            price.textContent = sashimi[item];
            name.appendChild(price)

            listElem.appendChild(name);

            menuItems.push(listElem);
        }

        return menuItems;
    }
    
    menuElem.appendChild(menuContainer);

    return menuElem;
}