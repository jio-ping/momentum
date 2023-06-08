const images =[
    "universe1.jpg",
    "universe2.jpg",
    "universe3.jpg",
    "universe4.jpg"
]

const chosenImages = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img");
// console.log(chosenImages);
bgImage.src = `img/${chosenImages}`;
bgImage.setAttribute ("id", "background")

document.body.appendChild(bgImage);