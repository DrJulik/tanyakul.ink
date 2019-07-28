var lightbox = $('.work2 a').simpleLightbox();

// Disabling the scroll at the top
const bttBtn = document.querySelector('.back-to-top');

window.onscroll = function() {
  scrollFunction();
};

bttBtn.style.display = 'none';

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    bttBtn.style.display = 'block';
  } else {
    bttBtn.style.display = 'none';
  }
}

// smooth scroll for back to top
$('.back-to-top').on('click', function() {
  const top = $('#top').position().top;

  $('html, body').animate(
    {
      scrollTop: top
    },
    500
  );
});
