export default function home(){
    const homeSection = document.createElement("section");

    const about = document.createElement("div");
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About";
    const aboutContentOne = document.createElement("p");
    aboutContentOne.textContent = "Yummy Sushi is a vibrant and bustling sushi restaurant located in the heart of the city. Our mission is to provide our customers with the freshest and most delicious sushi in a warm and welcoming environment.";
    const aboutContentTwo = document.createElement("p");
    aboutContentTwo.textContent = "We take pride in our extensive menu of traditional and modern sushi dishes that are made with the highest quality ingredients. Our sushi chefs are skilled and passionate about their craft, and they work hard to create unique and delicious combinations that will tantalize your taste buds.";
    about.appendChild(aboutHeading);
    about.appendChild(aboutContentOne);
    about.appendChild(aboutContentTwo);

    homeSection.appendChild(about);

    const hours = document.createElement("div");
    const hoursHeading = document.createElement("h1");
    hoursHeading.textContent = "Hours";
    const hoursContent = document.createElement("ul");
    hoursContent.classList.add("hours-list");
    const hoursDetail = [
        "Monday-Thursday: 11:30am-3:00pm",
        "Friday-Saturday: 11:30am-11:00pm",
        "Sunday: Closed"
    ];
    for (const time of hoursDetail){
        const listItem = document.createElement("li");
        listItem.textContent = time;
        hoursContent.appendChild(listItem);
    }
    hours.appendChild(hoursHeading);
    hours.appendChild(hoursContent);

    homeSection.appendChild(hours);

    const location = document.createElement("div");
    const locationHeading = document.createElement("h1");
    locationHeading.textContent = "Location";
    const locationContent = document.createElement("p");
    locationContent.textContent = "123 Main St., Houston, TX 77007";

    location.appendChild(locationHeading);
    location.appendChild(locationContent);

    homeSection.appendChild(location);

    return homeSection;
}