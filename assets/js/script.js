require('bootstrap');

$(document).ready(function() {

  
  // First image is hard coded in index.html
  const carouselSlides = [
    {
      title: "We travel all over the US",
      subtitle: "Check out our schedule!",
      img: "./assets/img/food-table.jpg",
      btnText: "View Schedule",
      btnUrl: "schedule.html"
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: "./assets/img/grill.jpg",
      btnText: "Purchase Tickets",
      btnUrl: "tickets.html"
    },
  ]


  if (window.location.href.indexOf("index") > -1) {

    carouselSlides.forEach((slide, i) => {
      $('.carousel-inner').append(`
    <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
      <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
          <div class="container">
            <div class="row align-items-center justify-content-center">
                <h2 class="display-4 mb-2">${slide.title}</h2>
            </div>
            <div class="row align-items-center justify-content-center"> 
              <h3>${slide.subtitle}</h3>
            </div>
            <div class=" mt-4 row align-items-center justify-content-center"> 
              <a class="btn btn-primary" href="${slide.btnUrl}">
                  ${slide.btnText}
              </a>
            </div>
          </div>
      </div>
    </div>`)
    })
  }

    const purchaseBtn = document.getElementById("purchaseBtn");
    const purchaseEmail = document.getElementById("purchaseEmail");
    const modalEl = document.querySelector(".modal-content");
    const modalBodyEl = document.querySelector(".modal-body");
    const modalFooterEl = document.querySelector(".modal-footer");

});