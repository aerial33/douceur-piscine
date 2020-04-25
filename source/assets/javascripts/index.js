// External Library
import 'bootstrap';
import '../stylesheets/site.scss';
import '@fortawesome/fontawesome-free/js/all';
import Glide from '@glidejs/glide';

// Relative dependencies (our code)
$('#video-play').click(() => {
  const src = 'https://youtube.com/embed/MBxs2iA-EmI';
  $('#myModal').modal('show');
  $('#myModal iframe').attr('src', src);
});

$('#myModal').on('hidden.bs.modal', () => {
  $('#myModal iframe').removeAttr('src');
});

// <iframe width="560" height="315" src="https://www.youtube.com/embed/kuwyUa_mxFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const sliders = document.querySelectorAll('.glide');
sliders.forEach((item) => {
  const slider = new Glide(item, {
    perView: 3,
    keyboard: false,
    bound: true,
    animationDuration: 1000,
    breakpoints: {
      980: {
        perView: 2,
        peek: {
          before: 0,
          after: 50
        }
      },
      770: {
        perView: 1,
        peek: {
          before: 0,
          after: 70
        }
      }
    }
  });
  slider.mount();
});

const poolSliders = document.querySelectorAll('.carousel-pool');
poolSliders.forEach((item) => {
  const poolSlider = new Glide(item, {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    animationDuration: 1000,
    gap: 5,
    breakpoints: {
      850: {
        perView: 2
      },
      770: {
        perView: 1
      }
    }
  });
  poolSlider.mount();
});
