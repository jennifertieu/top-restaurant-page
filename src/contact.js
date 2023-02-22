export default function contact(){
    // create DOM elements
    const contactElem = document.createElement("section");
    contactElem.setAttribute("id", "contact");

    // heading
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    contactElem.appendChild(heading);

    // phone number and email
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    const phone = document.createElement("div");
    phone.textContent = "123-456-7890";
    const email = document.createElement("a");
    email.setAttribute("href", "mailto:contact@yummysushi.com");
    email.textContent = "contact@yummysushi.com";
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    contactElem.appendChild(contactInfo);

    // contact form
    // const contactForm = document.createElement("form");

    return contactElem;
}