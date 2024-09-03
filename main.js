let menuIcon = document.querySelector(".menubar");
let nav = document.querySelector(".rs");
let close = document.querySelector(".close_btn");
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// close.addEventListener("click", () => {
//   nav.classList.remove("active");
//   console.log("close", nav);
// });
// let menuIcon = document.querySelector(".menubar");
// let navlist = document.querySelector(".rs");
// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("active");
//   // navlist.classList.toggle("active");
//   document.body.classList.toggle("open");
// });

// remove navlist
// navlist.addEventListener("click", () => {
//   navlist.classList.add("active");
//   menuIcon.classList.remove("active");
//   document.body.classList.remove("open");
// });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
// header container
ScrollReveal().reveal(".home_rs img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".home_ls h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".home_ls p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".home_ls p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".home_ls .btn_start", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".home_ls a", {
  ...scrollRevealOption,
  delay: 2000,
});
// about container
ScrollReveal().reveal(".about_img img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".rs span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".rs h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".client_detail ", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".client_rating", {
  ...scrollRevealOption,
  delay: 2000,
});
// service container
ScrollReveal().reveal(".card", {
  duration: 1000,
  interval: 500,
});
