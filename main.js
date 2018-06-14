var backToTopButton = document.querySelector('#backtotop')

backToTopButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});

var header = document.querySelector(".row1");

window.addEventListener('wheel', function(event) {
  if(event.deltaY > 0) {
    header.classList.add("hidden");
  } else if(event.deltaY < 0) {
    header.classList.remove("hidden");
  }
});
