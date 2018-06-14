var backToTopButton = document.querySelector('#backtotop')

backToTopButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});
