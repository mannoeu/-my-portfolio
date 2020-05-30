var cursor = $(".cursor"),
  follower = $(".cursor-secondary");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: () => {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".thumb").on("mouseenter", () => {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".thumb").on("mouseleave", () => {
  cursor.removeClass("active");
  follower.removeClass("active");
});

$(".link").on("mouseenter", () => {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".link").on("mouseleave", () => {
  cursor.removeClass("active");
  follower.removeClass("active");
});
