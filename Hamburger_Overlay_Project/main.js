document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', revealSection);
});

function revealSection() {
  var hiddenSection = document.getElementById('hidden-section');
  var windowHeight = window.innerHeight;
  var sectionTop = hiddenSection.getBoundingClientRect().top;

  if (sectionTop < windowHeight / 2) {
      hiddenSection.classList.add('visible');
  }
}
