export default function image(){
    const imageSection = document.createElement("section");
    imageSection.setAttribute("id", "image-section");

    const title = document.createElement("h1");
    title.textContent = "Yummy Sushi";
    title.classList.add("title");

    const img = document.createElement("img");
    img.setAttribute("src", "./derek-duran-unsplash.jpg");
    img.setAttribute("alt", "Sushi Picture");
    img.setAttribute("width", "100%");

    imageSection.appendChild(title);
    imageSection.appendChild(img);

    return imageSection;
}