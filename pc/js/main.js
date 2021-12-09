const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    prevE1: "#product .prev",
    nextE1: "#product .next",
  },
});

const gnblist = $("#gnb .list > li");
const faqList = $(".faqBox ul li");
gnblist.on("mouseenter", function () {
  $(this).find(".depth02").slideDown(250);
});

gnblist.on("mouseleave", function () {
  $(this).find(".depth02").slideUp(100);
});

faqList.on("click", function () {
  $(this).toggleClass("on");
  $(this).siblings("li").removeClass("on");
  $(this).find("dd").stop().slideToggle();
  $(this).siblings("li").find("dd").stop().slideUp();
});

const header = $("#header");
$(window).on("scroll", function () {
  const st = $(window).scrollTop();
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }
  //console.log(st);
});

const onedayCheck = $("#onedayCheck");
const btnOneday = $(".popup .oneday");
const popup = $(".popup");

let isChecked = onedayCheck.is(":checked");
console.log(isChecked);

onedayCheck.on("change", function () {
  //console.log($(this).is(":checked"));
  isChecked = $(this).is(":checked");
  console.log(isChecked);
});
btnOneday.on("click", function () {
  gsap.to(popup, { top: -600, duration: 1, ease: "back.in" });
  if (isChecked) {
    Cookies.set("oneday", "one", { expires: 1 });
  }
});

if (Cookies.get("oneday") === "one") {
  popup.hide();
} else {
  popup.show();
}
