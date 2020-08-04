$(document).ready(function () {
  // helper toggle
  $(".helper-item__header").click(function () {
    $(this).parent(".helper-item").toggleClass("helper-item--show");
    $(this)
      .siblings(".helper-item__dropdown")
      .stop(true, true)
      .slideToggle(220);
  });

  // file upload
  $(".js-upload-input").on("change", function () {
    var splittedFakePath = this.value.split("\\");
    $(this).siblings(".upload-file__label").toggleClass("is-hide");
    $(this).siblings(".upload-file__result").toggleClass("is-show");
    $(this)
      .siblings(".upload-file__result")
      .find(".upload-file__title")
      .text(splittedFakePath[splittedFakePath.length - 1]);
    $(this)
      .siblings(".upload-file__result")
      .append(
        '<div class="js-delete-upload btn-delete upload-file__delete"><span class="icon-close btn-delete__icon"></span></div>'
      );
  });

  $("body").on("click", ".js-delete-upload", function () {
    $(this).siblings(".upload-file__title").text("");
    $(this)
      .closest(".upload-file__result")
      .removeClass("is-show")
      .siblings(".upload-file__label")
      .removeClass("is-hide")
      .siblings('input[type="file"]')
      .val("");
    $(this).remove();
  });

  // range slider
  if ($(".js-range-slider").length > 0) {
    $(".js-range-slider").ionRangeSlider();
  }

  // date & time picker

  if ($(".js-picke").length > 0) {
    $(".js-picker").datetimepicker();
  }

  $(".appeal-link__arrow").click(function () {
    $(".appeal-link").fadeOut(300);
  });

  if ($(".js-mailing__nav-wrap").length > 0) {
    $(".js-mailing__nav-wrap").mCustomScrollbar({
      theme: "custom",
      mouseWheel: { deltaFactor: "auto" },
    });
  }

  // helper toggle
  $(".sender__date-toggle").click(function () {
    $(this).toggleClass("is-active");
    $(".sender__date-title, .sender__date-action").toggleClass("is-show");
    var hiddenField = $("#kzp_field"),
      val = hiddenField.val();
    hiddenField.val(val === "0" ? "1" : "0");
  });

  // tabs
  $(".mailing__nav-link").click(function () {
    $(".mailing__block").removeClass("mb-hidden");
    $(".mailing__item").removeClass("mb-hidden");
    $(".mailing__nav-link").removeClass("is-active mb-decor");
    $(this).addClass("is-active");
    $(".mailing__item").removeClass("is-show");
    var activeTab = $(this).attr("href");
    $(activeTab).addClass("is-show");
    event.preventDefault();
  });

  // copy mail
  $(".form__header-action-btn-copy").click(function () {
    let buffer = $("<input>");
    $("body").append(buffer);
    buffer.val($(".form__header-action-input").val()).select();
    document.execCommand("copy");
    buffer.remove();
  });

  $(".form__btn--start").fancybox({
    touch: false,
    scrolling: "no",
    autoFocus: false,
    beforeShow: function () {
      $("body").css({ "overflow-y": "hidden" });
    },
    afterClose: function () {
      $("body").css({ "overflow-y": "visible" });
    },
    btnTpl: {
      smallBtn:
        '<div data-fancybox-close class="popup-comment__close"><img src="images/close-popup.svg" class="close-popup-icon"></div>',
    },
  });
});

$(".sender__btn--disabling").click(function (e) {
  e.preventDefault();
  $(this).addClass("disabled");

  setTimeout(() => {
    $(this).removeClass("disabled");
  }, 30000);
});

$(document).mouseup(function (e) {
  // hide nav dropdown on click outside
  var container = $(".nav__dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".nav__toggle").removeClass("nav__toggle--active");
    $(".nav__dropdown").removeClass("nav__dropdown--show");
    // toggle nav theme
    $(".nav__toggle").click(function () {
      $(this).toggleClass("nav__toggle--active");
      $(".nav__dropdown").toggleClass("nav__dropdown--show");
    });
  }
});

// background animated

if ($('.post-blocks__pros').length > 0){
  $('.post-blocks__pros').each(function () {
    var value = parseInt($(this).text());
    if ($.isNumeric( value ) && value != 0) {
      if (value < 25) {
        $(this).addClass('state-1');
      } else if (value < 75) {
        $(this).addClass('state-2');
      } else {
        $(this).addClass('state-3');
      }
    } else {
      $(this).closest('.post-blocks__item').remove();
    }
  });
}

var c = document.getElementById("bg-animated");
if (typeof c !== "undefined") {
  var ctx = c.getContext("2d");

  function resize() {
    var box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
  }

  var light = {
    x: -200,
    y: -200,
  };

  var colors = ["#262C35", "#262C35", "#262C35"];

  function drawLight() {
    ctx.beginPath();
    ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    var gradient = ctx.createRadialGradient(
      light.x,
      light.y,
      0,
      light.x,
      light.y,
      1000
    );
    gradient.addColorStop(0, "#262C35");
    gradient.addColorStop(1, "#1B1F26");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    gradient = ctx.createRadialGradient(
      light.x,
      light.y,
      0,
      light.x,
      light.y,
      5
    );
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "#3b4654");
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  function Box() {
    this.half_size = Math.floor(Math.random() * 50 + 1);
    this.x = Math.floor(Math.random() * c.width + 1);
    this.y = Math.floor(Math.random() * c.height + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 2000;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.getDots = function () {
      var full = (Math.PI * 2) / 4;

      var p1 = {
        x: this.x + this.half_size * Math.sin(this.r),
        y: this.y + this.half_size * Math.cos(this.r),
      };
      var p2 = {
        x: this.x + this.half_size * Math.sin(this.r + full),
        y: this.y + this.half_size * Math.cos(this.r + full),
      };
      var p3 = {
        x: this.x + this.half_size * Math.sin(this.r + full * 2),
        y: this.y + this.half_size * Math.cos(this.r + full * 2),
      };
      var p4 = {
        x: this.x + this.half_size * Math.sin(this.r + full * 3),
        y: this.y + this.half_size * Math.cos(this.r + full * 3),
      };

      return {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
      };
    };
    this.rotate = function () {
      var speed = (60 - this.half_size) / 20;
      this.r += speed * 0.002;
      this.x += speed;
      this.y += speed;
    };
    this.draw = function () {
      var dots = this.getDots();
      ctx.beginPath();
      ctx.moveTo(dots.p1.x, dots.p1.y);
      ctx.lineTo(dots.p2.x, dots.p2.y);
      ctx.lineTo(dots.p3.x, dots.p3.y);
      ctx.lineTo(dots.p4.x, dots.p4.y);
      ctx.fillStyle = this.color;
      ctx.fill();

      if (this.y - this.half_size > c.height) {
        this.y -= c.height + 100;
      }
      if (this.x - this.half_size > c.width) {
        this.x -= c.width + 100;
      }
    };
    this.drawShadow = function () {
      var dots = this.getDots();
      var angles = [];
      var points = [];

      for (dot in dots) {
        var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
        var endX =
          dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
        var endY =
          dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
        angles.push(angle);
        points.push({
          endX: endX,
          endY: endY,
          startX: dots[dot].x,
          startY: dots[dot].y,
        });
      }

      for (var i = points.length - 1; i >= 0; i--) {
        var n = i == 3 ? 0 : i + 1;
        ctx.beginPath();
        ctx.moveTo(points[i].startX, points[i].startY);
        ctx.lineTo(points[n].startX, points[n].startY);
        ctx.lineTo(points[n].endX, points[n].endY);
        ctx.lineTo(points[i].endX, points[i].endY);
        ctx.fillStyle = "#1B1F26";
        ctx.fill();
      }
    };
  }

  var boxes = [];

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLight();

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].rotate();
      boxes[i].drawShadow();
    }
    for (var i = 0; i < boxes.length; i++) {
      collisionDetection(i);
      boxes[i].draw();
    }
    requestAnimationFrame(draw);
  }

  resize();
  draw();

  while (boxes.length < 14) {
    boxes.push(new Box());
  }

  window.onresize = resize;
  c.onmousemove = function (e) {
    light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
    light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
  };

  function collisionDetection(b) {
    for (var i = boxes.length - 1; i >= 0; i--) {
      if (i != b) {
        var dx =
          boxes[b].x + boxes[b].half_size - (boxes[i].x + boxes[i].half_size);
        var dy =
          boxes[b].y + boxes[b].half_size - (boxes[i].y + boxes[i].half_size);
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < boxes[b].half_size + boxes[i].half_size) {
          boxes[b].half_size =
            boxes[b].half_size > 1 ? (boxes[b].half_size -= 1) : 1;
          boxes[i].half_size =
            boxes[i].half_size > 1 ? (boxes[i].half_size -= 1) : 1;
        }
      }
    }
  }
}