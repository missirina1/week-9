function studingJS() {
  console.log("Я учу JavaScript!");
}
studingJS();

let currentIndex = 1;

const currentImage = document.getElementById("currentImage");

function prevImage() {
  if (currentIndex === 1) {
    currentIndex = 2;
  } else {
    currentIndex = 1;
  }
  currentImage.src = "image" + currentIndex + ".jpg";
}

function nextImage() {
  if (currentIndex === 1) {
    currentIndex = 2;
  } else {
    currentIndex = 1;
  }
  currentImage.src = "image" + currentIndex + ".jpg";
}
