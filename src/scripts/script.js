document.addEventListener("mousemove", function (e) {
  const spotlight = document.querySelector(".header__navigation__spotlight");
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.transform = `translate(${x - 600}px, ${y - 600}px)`;
});

document.body.addEventListener("mouseover", function () {
  const spotlight = document.querySelector(".header__navigation__spotlight");
  spotlight.style.opacity = "1";
});
