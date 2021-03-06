window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
});

window.addEventListener("DOMContentLoaded", function () {
  let status = "lower200";
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".menu__hamburger");
  const overlay = document.querySelector(".overlay");
  const navMobile = document.querySelector(".nav-mobile");
  const menuLink = document.querySelectorAll(".menu__link");
  const navMobileLink = document.querySelectorAll(".nav-mobile__link");
  const scrollTop = document.querySelector(".scrolltop");

  menuLink.forEach((m) => {
    m.addEventListener("click", (e) => {
      const id = m.getAttribute("data-id");
      smoothScroll(`#${id}`, 1000);
    });
  });
  navMobileLink.forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("data-id");
      smoothScroll(`#${id}`, 1000);
    });
  });

  hamburger.addEventListener("click", (e) => {
    if (hamburger.classList.contains("open")) {
      hamburger.classList.remove("open");
      overlay.classList.remove("fade-in");
      overlay.classList.add("fade-out");
      menu.classList.remove("menu--white");
      navMobile.classList.remove("turn-in-top");
      navMobile.classList.add("turn-out-top");
    } else {
      hamburger.classList.add("open");
      overlay.classList.remove("fade-out");
      overlay.classList.add("fade-in");
      menu.classList.add("menu--white");
      navMobile.classList.remove("turn-out-top");
      navMobile.classList.add("turn-in-top");
    }
  });

  window.addEventListener("scroll", function () {
    var offset = window.pageYOffset;
    if (offset > 200) {
      if (status === "lower200") {
        menu.classList.add("menu--scroll");
        scrollTop.classList.add("scrolltop--animate");
        status = "higher200";
      }
    } else {
      if (status === "higher200") {
        menu.classList.remove("menu--scroll");
        scrollTop.classList.remove("scrolltop--animate");
        status = "lower200";
      }
    }
  });

  // count down
  document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    window.open('https://forms.gle/WW4syKyEnqSxtWi28');
  });

  // Set the date we're counting down to
  var countDownDate = new Date("Apr 28, 2021 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("ngay").innerHTML = days;
    document.getElementById("gio").innerHTML = hours;
    document.getElementById("phut").innerHTML = minutes;
    document.getElementById("giay").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "???? h???t h???n ????ng k??";
    }
  }, 1000);

  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop - 200;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animationScroll(currentTime) {
      if (startTime === null) startTime = currentTime; // sau 7s khi refesh  m???i nh???n n??t ????? chuy???n ?????ng th?? current time l??c ?????u b???ng 7 v?? thay ?????i ?????n khi h???t hi???u ???ng
      var timeElapsed = currentTime - startTime; // th???i gian tr??i qua
      var run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutCubic(t, b, c, d) {
      // function ease http://gizma.com/easing/#cub3
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animationScroll);
  }

  scrollTop.addEventListener("click", function () {
    smoothScroll(".menu", 1000); // menu top
  });
});
