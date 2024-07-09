// Get the modal
var modal = document.getElementById("newsletter-popup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Show the modal after 2 seconds
window.onload = function() {
  setTimeout(function() {
    modal.style.display = "block";
  }, 2000);
}

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-nl], [data-lang-en]');
    elements.forEach(element => {
        if (language === 'nl') {
            element.textContent = element.getAttribute('data-lang-nl');
        } else if (language === 'en') {
            element.textContent = element.getAttribute('data-lang-en');
        }
    });
}