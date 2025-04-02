document.addEventListener("DOMContentLoaded", () => {
  const mainSection = document.querySelector(".main-area");
  const maxScroll = 900;
  let lastScrollY = 0;

  function handleScroll() {
    let scrollY = window.scrollY;
    if (Math.abs(scrollY - lastScrollY) < 5) return; // 작은 변화는 무시
    lastScrollY = scrollY;

    let scrollRatio = Math.min(scrollY / maxScroll, 1);
    let scaleValue = 1 - scrollRatio;
    let opacityValue = 1 - scrollRatio;

    mainSection.style.transform = `scale(${scaleValue})`;
    mainSection.style.opacity = opacityValue;

    requestAnimationFrame(handleScroll);
  }

  window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
});

// project
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".project .item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
});


// footer
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
