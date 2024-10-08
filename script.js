$(document).ready(function () {
  $("").click(function () {
    var scrolled = $(window).scrollTop() + 60;
    if ($(".pop_up").css("position") == "absolute") {
      $(".pop_up").css("top", scrolled);
    }
    $(".pop_up").show();
    $(".pop_up_bg").show();
  });
  $(".pop_up_close").click(function () {
    $(".pop_up").hide();
    $(".pop_up_bg").hide();
  });
  $("#form1").submit(function (e) {
    e.preventDefault();
    var name = $("#form1 .input_name").val();
    var telephone = $("#form1 .input_telephone").val();
    var message = $("#form1 .input_message").val();
    if (name == "" || telephone == "" || message == "") {
      $(".footer form button").addClass("shake");
      setTimeout(function () {
        $(".footer form button").removeClass("shake");
      }, 1000);
    } else {
      $.ajax({
        type: "POST",
        url: "post.php",
        data: { name: name, telephone: telephone, message: message },
        dataType: "JSON",
      });
      $("#form1").hide();
      $("#form1_ok").show();
    }
  });
  $("#form_pop_up").submit(function (e) {
    e.preventDefault();
    var name = $("#form_pop_up .input_name").val();
    var telephone = $("#form_pop_up .input_telephone").val();
    var time = $("#form_pop_up .input_time").val();
    var day = $("#form_pop_up .input_day").val();
    var month = $("#form_pop_up .input_month").val();
    if (
      name == "" ||
      telephone == "" ||
      time == "" ||
      day == "" ||
      month == ""
    ) {
      $("#form_pop_up button").addClass("shake");
      setTimeout(function () {
        $("#form_pop_up button").removeClass("shake");
      }, 1000);
    } else {
      $.ajax({
        type: "POST",
        url: "pop_up.php",
        data: {
          name: name,
          telephone: telephone,
          day: day,
          time: time,
          month: month,
        },
        dataType: "JSON",
      });
      $("#form_pop_up").hide();
      $(".pop_up p").hide();
      $("#success").show();
      $(".pop_up").addClass("topik");
    }
  });
  $("#date").click(function () {
    $("#date").removeAttr("type");
    $("#date").attr("type", "date");
    $("#date").removeAttr("id");
  });
  $(".burger").click(function () {
    $(".burger_menu").slideToggle();
    $("body").toggleClass("overflow_body");
    $(".burger").toggleClass("burger_close");
    $(".burger").toggleClass("burger_open");
  });
  $(".burger_menu a").click(function (event) {
    $(".burger_menu").hide();
    $(".burger").toggleClass("burger_open");
    $(".burger").toggleClass("burger_close");
    $("body").toggleClass("overflow_body");
  });
  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 800);
    $("a").css({ "text-decoration": "none" });
  });
  $(".street a").click(function (e) {
    e.preventDefault();
    $(".google_map").css({ display: "block" });
    $(".google_map_bg").show();
  });
  $(".google_map img").click(function () {
    $(".google_map").css({ display: "none" });
    $(".google_map_bg").hide();
  });
  $(function () {
    $("select").selectric({ disableOnMobile: false, nativeOnMobile: false });
  });
  if (window.innerWidth < 768) {
    var Selectric = $("select").data("selectric");
    Selectric.destroy();
  }
});
