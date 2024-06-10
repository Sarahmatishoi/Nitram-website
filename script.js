
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


// const parentContainer = document.querySelector('.read-more-container');

// parentContainer.addEventListener('click', event => {

//   const current = event.target;

//   const isReadMoreBtns = current.className.includes('read-more-btn');

//   if (!isReadMoreBtns) return;

//   const currentText = event.target.parentNode.querySelector('.read-more-text')

//   currentText.classList.toggle('read-more-text--show');

//   current.textContent = current.textContent.includes('Read More') ?
//   "Read Less..." : "Read More...";
// });

//------ javascript for readmore button in the services section-------

document.addEventListener('DOMContentLoaded', function() {
  var readMoreBtns = document.querySelectorAll('.read-more-btn');
  var readMoreContents = document.querySelectorAll('.read-more-text');

  readMoreBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      readMoreContents[index].classList.toggle('read-more-text--show');
      this.textContent = this.textContent.includes ('Read More') ? 
      "Read Less..." : "Read More...";
    });
  });
});


document.getElementById("button").addEventListener('click', function(){
  document.querySelector('.popup').style.display = "flex";
})