const repositorys = document.querySelectorAll(".description .link");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const closeModal = document.querySelector("#closeModal");

var tl = gsap.timeline({
  defaults: {
    duration: 0.886,
  },
});

tl.from(".title", {
  y: -50,
  opacity: 0,
  stagger: 0.6,
})
  .from(
    ".thumb",
    {
      opacity: 0,
      stagger: 0.6,
      delay: 1.2,
    },
    "-=2.2"
  )
  .from(
    ".description",
    {
      y: 50,
      opacity: 0,
      stagger: 0.6,
    },
    "-=1.5"
  )
  .to(
    ".tech",
    {
      y: 0,
      opacity: 1,
      stagger: 0.6,
    },
    "-=.5"
  );

function toggleModal() {
  modal.classList.toggle("active");
  body.classList.toggle("modal-open");
}

function reverseAnimated() {
  tl.reversed() ? tl.play() : (tl.reverse(), toggleModal());
}

closeModal.addEventListener("click", () => {
  reverseAnimated();
  toggleModal();
});

repositorys.forEach((repository) => {
  repository.addEventListener("click", reverseAnimated);
});
