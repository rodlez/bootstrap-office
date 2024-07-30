/**  Make the navigation bar change color when we scroll more than X pixels vertically
 * @param {int} startPixel Number of pixels when the navbar will change color
 * @param {string} colorChange Color of navbar background 
 * */
function userScroll(startPixel, colorChange) {
    const navbar = document.querySelector('.navbar');
    // To Show or Hide the top button when we scroll
    const toTopBtn = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
        if(window.scrollY > startPixel) {
            navbar.classList.add(colorChange);
            navbar.classList.add('navbar-sticky');
            toTopBtn.classList.add('show');
        } else {
            navbar.classList.remove(colorChange);
            navbar.classList.remove('navbar-sticky');
            toTopBtn.classList.remove('show');
        }
    });
}

/**
 * Take the counter class search for every data-target and show a count up timer
 * @param {int} delay In ms to the count up timer
 */
function incrementStats(delay) {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach((counter) => {
      counter.innerText = 0;

      const updateCounter = () => {
        // + cast string to int
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;         
  
        if (count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCounter, delay);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
}


/**
 * Position the DOM on the top
 */
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Once the DOM id loaded the functions will be executed
document.addEventListener('DOMContentLoaded', userScroll(50, 'bg-white'));
document.addEventListener('DOMContentLoaded', incrementStats(10));
// Event Listener when top button is clicked
document.querySelector('#to-top').addEventListener('click', scrollToTop);
