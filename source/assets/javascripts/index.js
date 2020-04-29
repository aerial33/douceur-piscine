// External Library
import 'bootstrap';
import '../stylesheets/site.scss';
import '@fortawesome/fontawesome-free/js/all';
import './slide';

// Relative dependencies (our code)
$('#video-play').click(() => {
  const src = 'https://youtube.com/embed/MBxs2iA-EmI';
  $('#myModal').modal('show');
  $('#myModal iframe').attr('src', src);
});

$('#myModal').on('hidden.bs.modal', () => {
  $('#myModal iframe').removeAttr('src');
});
