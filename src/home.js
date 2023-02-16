export default function home(){
    const homeSection = document.createElement("section");

    const about = document.createElement("div");
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About";
    const aboutContent = document.createElement("p");
    aboutContent.textContent = "Yummy Sushi is a vibrant and bustling sushi restaurant located in the heart of the city. Our mission is to provide our customers with the freshest and most delicious sushi in a warm and welcoming environment.";
    about.appendChild(aboutHeading);
    about.appendChild(aboutContent);

    homeSection.appendChild(about);

    const hours = document.createElement("div");
    const hoursHeading = document.createElement("h1");
    hoursHeading.textContent = "Hours";
    const hoursContent = document.createElement("ul");
    const hoursDetail = {};
    about.appendChild(aboutHeading);
    about.appendChild(aboutContent);

    const location = document.createElement("div");
    return homeSection;
}