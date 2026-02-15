import gsap from "gsap";

const body = document.body;
const nav = document.querySelector("nav");
const burger = nav.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const menuItems = overlay.querySelectorAll(".menu-item a");
const activeItem = overlay.querySelector("a.active");
const subNav = overlay.querySelector(".sub-nav");

gsap.set(menuItems, { y: 225 });
gsap.set(activeItem, { "--line-width": "0%" });

const timeline = gsap.timeline({
  paused: true,
  reversed: true,
  onStart() {
    body.style.overflow = "hidden";
  },
  onReverseComplete() {
    body.style.overflow = "";
  },
});

timeline
  .to(overlay, {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
  })

  .to(nav, {
    "--nav-scale": 0,
    "duration": 0.8,
    "ease": "power2.inOut",
  }, "-=1.2")

  .to(menuItems, {
    duration: 1.2,
    y: 0,
    stagger: 0.2,
    ease: "power4.out",
  }, "-=.8")

  .to(activeItem, {
    "--line-width": "100%",
    "duration": 0.8,
    "ease": "power4.out",
  }, "<0.5")

  .to(subNav, {
    duration: 0.3,
    bottom: "10%",
    opacity: 1,
  }, "<0.4");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");

  if (timeline.reversed()) {
    timeline.timeScale(1).play();
  }
  else {
    timeline.timeScale(1.5).reverse();
  }
});
