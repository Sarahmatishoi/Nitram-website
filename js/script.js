
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




const form =document.querySelector("form");
const fullName =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const subject =document.getElementById("subject");
const message =document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value} <br>
  Email: ${email.value} <br>
  Phone Number: ${phone.value} <br>
  Subject: ${subject.value} <br>
  Message: ${message.value}`;
  Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    Password : "password",
    To : ' nitramadvisoryllp@gmail.com',
    From : document.getElementById("email").value,
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message =="OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  
  }
);
}

function checkInputs(){
  const items = document.querySelectorAll(".item");
  for (const item of items ){
    if(item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", () => {
      if (item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else{
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });

  }

}


// JavaScript to toggle the 'hide-top-bar' class on scroll

  document.addEventListener("scroll", function () {
    console.log('Scroll event detected!');

    const topBarHeight = document.querySelector('.top-bar').offsetHeight;
    if (window.scrollY > topBarHeight) {
      document.body.classList.add("hide-top-bar");
    } else {
      document.body.classList.remove("hide-top-bar");
    }
  });



// navbar toogler code 
// function toggleMenu() {
//   const navItems = document.querySelector('.navbar'); 
//   navItems.classList.toggle('navbar-toggler');
// }

// document.querySelector('.navbar-toggler').addEventListener('click', toggleMenu);
