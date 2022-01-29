$(document).ready(function () {
  //Opening and closing modal by user
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeBtn = $(".modal__close"),
    isClosed = true;
  function closeModal() {
    modal.toggleClass("modal--visible");
    document.body.style.overflow = "";
    isClosed = true;
  }
  function openModal() {
    modal.toggleClass("modal--visible");
    document.body.style.overflow = "hidden";
    isClosed = false;
  }

  modalBtn.on("click", function () {
    openModal();
  });
  closeBtn.on("click", function () {
    closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && !isClosed) {
      closeModal();
    }
  });

  //Opening modal by scrolling

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //Setting new year timer

  const deadline = "2023-01-01";

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

  //Initializing WOW

  new WOW().init();

  //Adding RickRoll

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
