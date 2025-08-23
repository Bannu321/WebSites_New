const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerText = count;

          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();

      activated = true;
    });
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
    (pageYOffset === 0 && activated === true)
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });

    activated = false;
  }
});

// const navbar = document.querySelector(".navbar");
// window.onscroll = function () {
//   if (document.body.scrollTop > 300) {
//     navbar.classList.add("bg-transparent");
//     navbar.classList.remove("bg-tertiary");
//   } else if (document.body.scrollTop <= 300) {
//     navbar.classList.add("bg-tertiary");
//     navbar.classList.remove("bg-transparent");
//   }
// };

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-tertiary");
  } else if (window.scrollY <= 50) {
    navbar.classList.remove("bg-tertiary");
    // navbar.classList.add("bg-transparent");
  }
});

const slider = document.getElementById("reviewSlider");
const cards = slider.querySelectorAll(".Review-slider-card");
const dotsContainer = document.getElementById("reviewDots");

let currentSlide = 0;

// Create dots
cards.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("Review-dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  currentSlide = index;
  const offset = cards[index].offsetLeft;
  slider.scrollTo({
    left: offset,
    behavior: "smooth",
  });

  // Highlight the correct dot
  document.querySelectorAll(".Review-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % cards.length;
  showSlide(currentSlide);
}, 5000); // every 5s
