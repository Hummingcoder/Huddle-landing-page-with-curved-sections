function gsapAnim() {
  const tl = gsap.timeline();
  tl.from(".navItem", {
    y: -100,
    duration: 1,
    stagger: 0.3,
    opacity: 0,
    ease: "back",
  }).from(
    ".hero-heading,.hero-desc, #hero-section .startBtn",
    {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "back",
      stagger: 0.2,
    },
    "<"
  );
}

function gsapScroll() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#screen-sec",
        scroller: "body",
        scrub: 2,
        once: true,
        start: "top 110%",
        end: "top 40%",
      },
    })
    .from("#device", { y: 400, opacity: 0, duration: 2 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#screen-sec section",
        scroller: "body",
        scrub: 2,
        once: true,
        start: "top 110%",
        end: "top 20%",
      },
    })
    .from(".d1 img, .d1 h2,.d1 p", {
      x: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
    })
    .from(
      ".d2 img, .d2 h2,.d2 p",
      {
        x: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
      },
      "<"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".one .inn-sec",
        scroller: "body",
        scrub: 2,
        once: true,
        start: "top 90%",
        end: "top 20%",
      },
    })
    .from(".one .inn-sec img", { xPercent: 200, opacity: 0, duration: 3 })
    .from(
      ".one .inn-sec div h2,.one .inn-sec div p",
      {
        xPercent: -200,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
      },
      "<"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".middle-sec",
        scroller: "body",
        once: true,
        scrub: 2,
        start: "top 110%",
        end: "top 20%",
      },
    })
    .from(".middle-sec img", { xPercent: -200, opacity: 0, duration: 3 })
    .from(
      ".middle-sec h2,.middle-sec p",
      {
        xPercent: 200,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
      },
      "<"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sideBottom .inn-sec",
        once: true,
        scroller: "body",
        scrub: 2,
        start: "top 90%",
        end: "top 20%",
      },
    })
    .from(".sideBottom .inn-sec img", {
      xPercent: 200,
      opacity: 0,
      duration: 3,
    })
    .from(
      ".sideBottom .inn-sec h2,.sideBottom .inn-sec p",
      {
        xPercent: -200,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
      },
      "<"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".comm-sec",
        scroller: "body",
        once: true,
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    })
    .from(".comm-sec h2,.comm-sec button", { y: 200, opacity: 0, duration: 2 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer  ",
        scroller: "body",
        scrub: 2,
        once: true,
        start: "top 60%",
        end: "top 60%",
      },
    })
    .from(".ftop", {
      x: 200,
      opacity: 0,
      duration: 3,
      stagger: 0.3,
    })
    .from(
      ".fbottom",
      {
        x: -200,
        opacity: 0,
        duration: 3,
        stagger: 0.3,
      },
      "<"
    );
}

const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", () => {
  preloader.style.display = "none";
  gsapAnim();
  gsapScroll();
});
