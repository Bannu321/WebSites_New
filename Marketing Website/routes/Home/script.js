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

const navbar = document.querySelectorAll(".container-fluid");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-tertiary");
  }
  // else if (window.scrollY <= -50) {
  //   navbar.classList.remove("bg-tertiary");
  //   // navbar.classList.add("bg-transparent");
  // }
});
