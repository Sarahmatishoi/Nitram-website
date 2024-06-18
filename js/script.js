
function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}




//  ------javascript for partners sectionn-------

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOrHover: false,
    responsive: [{
      breakpoint: 768,
      setting: {
        slidesToShow: 4

      }
    }, {
      breakpoint: 520,
      setting: {
        slidesToShow: 3
      }

    }]
  });
});




// });

//------ javascript for readmore button in the services section-------

document.addEventListener('DOMContentLoaded', function () {
  var readMoreBtns = document.querySelectorAll('.read-more-btn');
  var readMoreContents = document.querySelectorAll('.read-more-text');

  readMoreBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      readMoreContents[index].classList.toggle('read-more-text--show');
      this.textContent = this.textContent.includes('Read More') ?
        "Read Less..." : "Read More...";
    });
  });
});




// Select the button element
const button = document.getElementById("button");

// Select the popup element
const popup = document.querySelector(".popup");

// Variable to keep track of the popup display state
let popupVisible = false;

// Add event listener to the button
button.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents the click event from bubbling up

  // Toggle the popup visibility
  popupVisible = !popupVisible;

  if (popupVisible) {
    // Display the popup
    popup.style.display = "flex";

    // Add event listener to detect clicks outside the popup
    document.addEventListener("click", closePopupOutside);
  } else {
    // Hide the popup
    popup.style.display = "none";

    // Remove event listener for clicks outside the popup
    document.removeEventListener("click", closePopupOutside);
  }
});

// Function to close the popup when clicking outside
function closePopupOutside(event) {
  if (!popup.contains(event.target) && event.target !== button) {
    // If the click is outside the popup and not on the button
    popup.style.display = "none";

    // Remove event listener after closing the popup
    document.removeEventListener("click", closePopupOutside);

    // Reset popupVisible state
    popupVisible = false;
  }
}



// code for team section card swiper

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  // slidesPerGroup: 3,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", // Corrected the property name from 'preEl' to 'prevEl'
  },

  breakpoints:{
    0: {
      slidesPerView: 1,

    },
    520: {
      slidesPerView: 2,

    },
     950: {
      slidesPerView: 3,

    },
  },
});

