let slides = document.querySelectorAll('.carousel-slide');
let buttons = document.querySelectorAll('.carousel-button');

function goToSlide(index) {
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });

  buttons.forEach(function(button) {
    button.style.display = 'none';
  });

  slides[index].classList.add('active');
  buttons[index].style.display = 'block';
}

goToSlide(0); // Exibe o primeiro slide inicialmente

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    goToSlide(index);
  });
});

