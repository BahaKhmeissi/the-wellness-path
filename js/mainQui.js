$(document).ready(function () {
  let currentQuestion = 1;
  const totalQuestions = 6;

  function updateProgress() {
    const progress = ((currentQuestion - 1) / totalQuestions) * 100;
    $(".progress-bar")
      .css("width", progress + "%")
      .text(Math.round(progress) + "%");
  }

  function showQuestion() {
    $(".question").removeClass("active");
    $(`.question[data-question="${currentQuestion}"]`).addClass("active");
    $("#prev-btn").prop("disabled", currentQuestion === 1);
    $("#next-btn").prop(
      "disabled",
      !$(`input[name="q${currentQuestion}"]:checked`).length
    );
    if (currentQuestion === totalQuestions) {
      $("#next-btn").hide();
      $("#finish-link").show(); // Show the finish link
    } else {
      $("#next-btn").show().text("Next");
      $("#finish-link").hide(); // Hide the finish link
    }
    updateProgress();
  }

  $("#survey-form").on("change", 'input[type="radio"]', function () {
    $("#next-btn").prop("disabled", false);
  });

  $("#next-btn").click(function () {
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      showQuestion();
    } else {
      $(".progress-bar").css("width", "100%").text("100%");
      $(".survey-container form").hide();
      $(".analyzing").show();
      $("#finish-link").fadeIn(200); // Show the finish link with fade-in
    }
  });

  $("#prev-btn").click(function () {
    if (currentQuestion > 1) {
      currentQuestion--;
      showQuestion();
    }
  });

  // Modal functionality
  const modal = $("#surveyModal");
  const openModalBtn = $("#quizModal");
  const closeModalBtn = $("#closeModalBtn");
  openModalBtn.click(function () {
    modal.show().css("opacity", 0).animate({ opacity: 1 }, 200);
    $(".modal-content").css("opacity", 0).animate({ opacity: 1 }, 200);
    showQuestion();
  });

  closeModalBtn.click(function () {
    $(".modal-content").animate({ opacity: 0 }, 100, function () {
      modal.animate({ opacity: 0 }, 100, function () {
        modal.hide();
      });
    });
  });

  $(window).click(function (event) {
    if ($(event.target).is(modal)) {
      $(".modal-content").animate({ opacity: 0 }, 200, function () {
        modal.animate({ opacity: 0 }, 200, function () {
          modal.hide();
        });
      });
    }
  });
});
$("#finish-link").click(function (e) {
  e.preventDefault();
  if (!$('input[name="q6"]:checked').length) {
    return false;
  }
  $(".progress-bar").css("width", "100%").text("100%");
  $(".analyzing").show();
  setTimeout(() => {
    window.location.href = $(this).attr("href");
  }, 1500);
});
