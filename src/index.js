import contact from "./contact.js";
import home from "./home.js";
import menu from "./menu.js";
import image from "./image.js";

"use strict";

const content = document.getElementById("content");

// image section
const imageSection = image();
content.appendChild(imageSection);

// tab section
const tabSection = document.createElement("main");
tabSection.setAttribute("id", "tab-section");
// tab container
const tabContainer = document.createElement("ul");
tabContainer.setAttribute("id", "tab-container");
// create tabs and add event listener
const homeTab = document.createElement("li");
const menuTab = document.createElement("li");
const contactTab = document.createElement("li");
for (const tab of [homeTab, menuTab, contactTab]){
    tab.classList.add("tab");
}
const homeTabBtn = document.createElement("button");
const menuTabBtn = document.createElement("button");
const contactTabBtn = document.createElement("button");
homeTabBtn.setAttribute("id", "home-tab");
menuTabBtn.setAttribute("id", "menu-tab");
contactTabBtn.setAttribute("id", "contact-tab");

homeTabBtn.addEventListener("click", displayContent);
menuTabBtn.addEventListener("click", displayContent);
contactTabBtn.addEventListener("click", displayContent);

homeTabBtn.textContent = "Home";
menuTabBtn.textContent = "Menu";
contactTabBtn.textContent = "Contact";

homeTabBtn.classList.add("active-tab");

homeTab.appendChild(homeTabBtn);
menuTab.appendChild(menuTabBtn);
contactTab.appendChild(contactTabBtn);

tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);

tabSection.appendChild(tabContainer);

const tabContentContainer = document.createElement("div");
const homeTabContent = document.createElement("div");
const menuTabContent = document.createElement("div");
const contactTabContent = document.createElement("div");
for (const content of [homeTabContent, menuTabContent, contactTabContent]){
    content.classList.add("tab-content");
}
homeTabContent.setAttribute("id", "home-tab-content");
menuTabContent.setAttribute("id", "menu-tab-content");
contactTabContent.setAttribute("id", "contact-tab-content");

homeTabContent.appendChild(home());
menuTabContent.appendChild(menu());
contactTabContent.appendChild(contact());

tabContentContainer.appendChild(homeTabContent);
tabContentContainer.appendChild(menuTabContent);
tabContentContainer.appendChild(contactTabContent);

tabSection.appendChild(tabContentContainer);

content.appendChild(tabSection);

function displayContent(){
    return;
}