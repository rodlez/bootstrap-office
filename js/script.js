/**  Make the navigation bar change color when we scroll more than X pixels vertically
 * @param {int} startPixel Number of pixels when the navbar will change color
 * @param {string} colorChange Color of navbar background 
 * */
function userScroll(startPixel, colorChange) {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > startPixel) {
            navbar.classList.add(colorChange);
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove(colorChange);
            navbar.classList.remove('navbar-sticky');
        }
    });
}

// Once the DOM id loaded the userScroll will be executed
document.addEventListener('DOMContentLoaded', userScroll(50, 'bg-white'));