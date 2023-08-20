// 추천명소 마우스 오버
const pins = document.querySelectorAll(".place");
const buttons = document.querySelectorAll(".mainButton");

function hoverIn(event) {
  gsap.to(event.target, { opacity: 0.65, duration: 0.3 });
  console.log(event.target.classList.contains(`pin4`));
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`pin${i + 1}`)) {
      gsap.to(`.bt${i + 1}`, { opacity: 0.65, duration: 0.3 });
      gsap.to(`.pin${i + 1}`, { opacity: 0.65, duration: 0.3 });
    }
  }
}

function hoverOut(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`pin${i + 1}`)) {
      gsap.to(`.bt${i + 1}`, { opacity: 1, duration: 0.3 });
      gsap.to(`.pin${i + 1}`, { opacity: 1, duration: 0.3 });
    }
  }
}

function hoverInBtn(event) {
  gsap.to(event.target, { opacity: 0.65, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`bt${i + 1}`)) {
      gsap.to(`.pin${i + 1}`, { opacity: 0.65, duration: 0.3 });
    }
  }
}

function hoverOutBtn(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`bt${i + 1}`)) {
      gsap.to(`.pin${i + 1}`, { opacity: 1, duration: 0.3 });
    }
  }
}

pins.forEach((pin) => {
  pin.addEventListener("mouseover", hoverIn);
});

pins.forEach((pin) => {
  pin.addEventListener("mouseout", hoverOut);
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", hoverInBtn);
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseout", hoverOutBtn);
});

// page 5: swiper
const sw = new Swiper(".swiper1", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 6, //slide 간의 gap (margin)
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 1500, //like transition

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// page 8 swiper

//page total interaction gsap
batch(".page", {
  interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 8, // maximum batch size (targets)
  onEnter: (batch) =>
    gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
  onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
  // you can also define things like start, end, etc.
});

function batch(targets, vars) {
  let varsCopy = {},
    interval = vars.interval || 0.1,
    proxyCallback = (type, callback) => {
      let batch = [],
        delay = gsap
          .delayedCall(interval, () => {
            callback(batch);
            batch.length = 0;
          })
          .pause();
      return (self) => {
        batch.length || delay.restart(true);
        batch.push(self.trigger);
        vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
      };
    },
    p;
  for (p in vars) {
    varsCopy[p] =
      ~p.indexOf("Enter") || ~p.indexOf("Leave")
        ? proxyCallback(p, vars[p])
        : vars[p];
  }
  gsap.utils.toArray(targets).forEach((target) => {
    let config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    ScrollTrigger.create(config);
  });
}
