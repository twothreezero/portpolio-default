document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".main").classList.add("show");
  }, 300);
  setTimeout(() => {
    document.querySelector(".img-area").classList.add("show");
  }, 300);
});

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

  items.forEach((item, index) => {
    if (index < 2) {
      item.classList.add("show");
    } else {
      observer.observe(item);
    }
  });
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
