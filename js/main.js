jQuery(document).ready(function ($) {
  "use strict";

  $(function () {
    // Vars
    var modBtn = $("#modBtn"),
      modal = $("#modal"),
      close = modal.find(".close-btn img"),
      modContent = modal.find(".modal-content");

    // open modal when click on open modal button
    modBtn.on("click", function () {
      modal.css("display", "block");
      modContent
        .removeClass("modal-animated-out")
        .addClass("modal-animated-in");
    });

    // close modal when click on close button or somewhere out the modal content
    $(document).on("click", function (e) {
      var target = $(e.target);
      if (target.is(modal) || target.is(close)) {
        modContent
          .removeClass("modal-animated-in")
          .addClass("modal-animated-out")
          .delay(300)
          .queue(function (next) {
            modal.css("display", "none");
            next();
          });
      }
    });
  });

  // on click event on all anchors with a class of scrollTo
  $("a.scrollTo").on("click", function () {
    // data-scrollTo = section scrolling to name
    var scrollTo = $(this).attr("data-scrollTo");

    // toggle active class on and off. added 1/24/17
    $("a.scrollTo").each(function () {
      if (scrollTo == $(this).attr("data-scrollTo")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // animate and scroll to the sectin
    $("body, html").animate(
      {
        // the magic - scroll to section
        scrollTop: $("#" + scrollTo).offset().top,
      },
      1000
    );
    return false;
  });

  $(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });

  $("");
});

var target_date = new Date().getTime() + 25 * 3600 * 48; // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  if (seconds_left <= 0) {
    window.location.href =
      "https://hop.clickbank.net/?affiliate=bahakh&vendor=geniusbr&pid=vsl";
    return;
  }

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  countdown.innerHTML = `
      <div class="fomo">
        <span class="fomoSpans">${days}</span>
        <div class="time_data">days</div>
      </div>
      <div class="fomo">
        <span class="fomoSpans">${hours}</span>
        <div class="time_data">hours</div>
      </div>
      <div class="fomo">
        <span class="fomoSpans">${minutes}</span>
        <div class="time_data">minutes</div>
      </div>
      <div class="fomo">
        <span class="fomoSpans">${seconds}</span>
        <div class="time_data">seconds</div>
      </div>
        
    `;
}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}
$("#gifBottom").click(() => {
  window.location.href =
    "https://hop.clickbank.net/?affiliate=bahakh&vendor=geniusbr&pid=vsl";
});
