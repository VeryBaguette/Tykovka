$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeBtn = $(".modal__close");
  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  const deadline = "2022-01-01";

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - new Date().getTime(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = t.days < 10 ? `0${t.days}` : t.days;
      hours.innerHTML = t.hours < 10 ? `0${t.hours}` : t.hours;
      minutes.innerHTML = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
      seconds.innerHTML = t.seconds < 10 ? `0${t.seconds}` : t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);
  new WOW().init();
  var player;
  $(".video__play").on("click", () => {
    console.log("click");
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "dQw4w9WgXcQ",
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }
});
