const sliderBlock = document.getElementById('fleet-slider-list');
const arrSlider = sliderBlock.querySelectorAll('.slider-item');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const WIDTH = sliderBlock.offsetWidth;

let counter = 0;
arrSlider[0].querySelector('.slider-image').style.opacity = 1;

next.addEventListener('click', () => {
  // console.log(counter);
  nextSlide(counter);
  if (counter >= arrSlider.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
})

prev.addEventListener('click', () => {
  // console.log(counter);
  prevSlide(counter);
  if (counter == 0) {
    counter = arrSlider.length - 1;
  } else {
    counter -= 1;
  }
})


function nextSlide(counter) {
  console.log(counter);
  let currentSlide = arrSlider[counter];
  let currentImage = currentSlide.querySelector('.slider-image');

  let prevSlide = (counter === 0) ? arrSlider[arrSlider.length - 1] : arrSlider[counter - 1];
  let prevImage = prevSlide.querySelector('.slider-image');

  let nextSlide = (counter === arrSlider.length - 1) ? arrSlider[0] : arrSlider[counter + 1];
  let nextImage = nextSlide.querySelector('.slider-image');



  if (getComputedStyle(currentSlide).opacity == 1) {
    currentSlide.classList.add('hidden');
    currentImage.style.opacity = '0';

    prevSlide.classList.add('hidden');
    prevImage.style.opacity = '0';

    nextSlide.classList.remove('hidden');
    nextImage.style.opacity = '1';

    // console.log('prev', prevImage);
    // console.log('current', currentImage);
    // console.log('next', nextImage);

  }
}


function prevSlide(counter) {
  let currentSlide = arrSlider[counter];
  let currentImage = currentSlide.querySelector('.slider-image');

  let prevSlide = (counter === arrSlider.length - 1) ? arrSlider[0] : arrSlider[counter + 1];
  let prevImage = prevSlide.querySelector('.slider-image');

  let nextSlide = (counter === 0) ? arrSlider[arrSlider.length - 1] : arrSlider[counter - 1];
  let nextImage = nextSlide.querySelector('.slider-image');



  if (getComputedStyle(currentSlide).opacity == 1) {
    currentSlide.classList.add('hidden');
    currentImage.style.opacity = '0';

    prevSlide.classList.add('hidden');
    prevImage.style.opacity = '0';

    nextSlide.classList.remove('hidden');
    nextImage.style.opacity = '1';

    // console.log('prev', prevImage);
    // console.log('current', currentImage);
    // console.log('next', nextImage);

  }
}
