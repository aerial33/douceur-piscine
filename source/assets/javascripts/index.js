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

new Glide('.glide', {
  perView: 3,
  keyboard: false,
  bound: true,
  animationDuration: 1000,
  breakpoints: {
    800: {
      perView: 2
    },
    500: {
      perView: 1
    }
  }
}).mount();
