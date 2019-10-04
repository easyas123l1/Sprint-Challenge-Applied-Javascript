/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const CreateCarousel = () =>{
  const carousel = document.createElement('div'),
  leftButton = document.createElement('div'),
  img1 = document.createElement('img'),
  img2 = document.createElement('img'),
  img3 = document.createElement('img'),
  img4 = document.createElement('img'),
  rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  img1.style.display = "block";

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  document.querySelector('.carousel-container').appendChild(carousel);
};

CreateCarousel();

let carouselImages = Array.from(document.querySelectorAll('.carousel img'));
let currentCarouselIndex = 0;

const rotateLeft = () =>{
  carouselImages[currentCarouselIndex].style.display = "none";

  if(currentCarouselIndex == 0){
    currentCarouselIndex = carouselImages.length -1;
  }else{
    currentCarouselIndex--;
  }

  carouselImages[currentCarouselIndex].style.display = "block";
};

const rotateRight = () =>{
  carouselImages[currentCarouselIndex].style.display = "none";

  if(currentCarouselIndex == carouselImages.length -1){
    currentCarouselIndex = 0;
  }else{
    currentCarouselIndex++;
  }

  carouselImages[currentCarouselIndex].style.display = "block";
}
let left = document.querySelector('.left-button');
let right = document.querySelector('.right-button');

left.addEventListener('click', rotateLeft);
right.addEventListener('click', rotateRight);