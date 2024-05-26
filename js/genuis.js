var target_date = new Date().getTime() + 55 * 3600 * 48; // set the countdown date
var days, hours, minutes, seconds; // variables for time units
let june26Date = new Date(new Date().getFullYear(), 5, 26);

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  var current_date = new Date().getTime();
  var seconds_left = (june26Date - current_date) / 1000;

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
$("#secretQ").click(() => {
  window.location.href =
    "https://hop.clickbank.net/?affiliate=bahakh&vendor=geniusbr&pid=vsl";
});
$("#thirdHolder").click(() => {
  window.location.href =
    "https://hop.clickbank.net/?affiliate=bahakh&vendor=geniusbr&pid=vsl";
});
$(document).ready(function () {
  $.get(
    "https://ipinfo.io?token=ca2d5e156e53a2",
    function (response) {
      // List of country codes to block
      var blockedCountries = [
        "FR", // France
        "ID", // Indonesia
        "IN", // India
        "PH", // Philippines
        "GT", // Guatemala
        "CN", // China
        "SG", // Singapore
        "JP", // Japan
        // "TN", // Tunisia
        "DE", // Germany
        "BE", // Belgium
        "VN", // Vietnam
        "EG", // Egypt
        "AF",
        "AM",
        "AZ",
        "BH",
        "BD",
        "BT",
        "BN",
        "KH",
        "GE",
        "HK",
        "IN",
        "ID",
        "IR",
        "IQ",
        "IL",
        "JP",
        "JO",
        "KZ",
        "KW",
        "KG",
        "LA",
        "LB",
        "MO",
        "MY",
        "MV",
        "MN",
        "MM",
        "NP",
        "KP",
        "OM",
        "PK",
        "PS",
        "PH",
        "QA",
        "SA",
        "SG",
        "KR",
        "LK",
        "SY",
        "TW",
        "TJ",
        "TH",
        "TL",
        "TR",
        "TM",
        "AE",
        "UZ",
        "VN",
        "YE",
      ];

      if (blockedCountries.includes(response.country)) {
        $("body").html("<h1>Access denied.</h1>");
      }
    },
    "jsonp"
  );
});
