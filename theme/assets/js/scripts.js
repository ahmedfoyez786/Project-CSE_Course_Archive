/*============================
   js index
==============================

==========================================*/

(function ($) {
  "use strict";

  /*================================
    Preloader
    ==================================*/
  var preloader = $("#preloader");
  $(window).on("load", function () {
    preloader.fadeOut("slow", function () {
      $(this).remove();
    });
  });

  /*================================
    stickey Header
    ==================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop(),
      mainHeader = $(".header-bottom");

    if (scroll > 50) {
      mainHeader.addClass("sticky-header");
    } else {
      mainHeader.removeClass("sticky-header");
    }
  });

  /*================================
    offste search
    ==================================*/
  var offsetSearch = $(".offset-search");
  var bodyOverlay = $(".body_overlay");
  $(".search_btn").on("click", function () {
    $(offsetSearch).addClass("show_hide");
    $(bodyOverlay).addClass("show_hide");
  });
  bodyOverlay.on("click", function () {
    $(offsetSearch).removeClass("show_hide");
    $(bodyOverlay).removeClass("show_hide");
  });

  /*================================
    Owl Carousel
    ==================================*/
  // slider_area carousel active
  function slider_area() {
    $(".slider-area").owlCarousel({
      margin: 0,
      loop: true,
      autoplay: false,
      autoplayTimeout: 4000,
      nav: true,
      items: 1,
      smartSpeed: 800,
      navText: [
        '<i><img src="assets/images/angle-left.png" alt="icon"/></i><span>prev</span>',
        '<span>next</span><i><img src="assets/images/angle-right.png" alt="icon"/></i>',
      ],
    });
  }
  slider_area();

  // course_carousel carousel active
  function course_carousel() {
    $(".course-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      dots: false,
      autoplayTimeout: 4000,
      nav: true,
      smartSpeed: 800,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          margin: 5,
        },
        480: {
          items: 1,
          margin: 30,
        },
        768: {
          items: 2,
          margin: 30,
        },
        1024: {
          items: 3,
          margin: 30,
        },
      },
    });
  }
  course_carousel();

  // commn_carousel carousel active
  function commn_carousel() {
    $(".commn-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      margin: 0,
      autoplayTimeout: 4000,
      nav: false,
      dotsEach: true,
      smartSpeed: 800,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }
  commn_carousel();

  // teacher_carousel carousel active
  function teacher_carousel() {
    $(".teacher-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      dots: false,
      margin: 0,
      autoplayTimeout: 4000,
      nav: true,
      smartSpeed: 800,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }
  teacher_carousel();

  // blog_carousel carousel active
  function blog_carousel() {
    $(".blog-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 0,
      dots: false,
      autoplayTimeout: 4000,
      nav: true,
      smartSpeed: 800,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }
  blog_carousel();

  // tst_carousel carousel active
  function tst_carousel() {
    $(".tst-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      items: 1,
      autoplayTimeout: 4000,
      nav: false,
      smartSpeed: 800,
      mouseDrag: false,
    });
  }
  tst_carousel();

  $(".expand-video").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
  });

  /*================================
    slicknav
    ==================================*/
  $("ul#m_menu_active").slicknav({
    prependTo: "#mobile_menu",
  });
})(jQuery);

// google map activation
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("google_map"), {
    center: { lat: 40.674, lng: -73.945 },
    scrollwheel: false,
    zoom: 12,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
    ],
  });
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
  });
}

// Get in touch
const form = document.querySelector("#form");
const full_name = document.querySelector("#full_name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const msg = document.querySelector("#msg");
function sendEmail() {
  const bodymsg = `Full Name: ${full_name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${msg.value}`;

  Email.send({
    SecureToken: "032a2a7f-2b57-45ab-9e42-b218752797d6",
    To: "ahmedfoyez786@gmail.com",
    From: "ahmedfoyez786@gmail.com",
    Subject: subject.value,
    Body: bodymsg,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Your Message Has Been Sent!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-text.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enetr a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !full_name.classList.contains("error") &&
    !email.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !msg.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
