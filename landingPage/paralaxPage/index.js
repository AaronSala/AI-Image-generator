const title = document.getElementById("title");
// const bg_1 = document.getElementById("bg-1");
// const bg_2 = document.getElementById("bg-2");

const image_card_1 = document.getElementById("image__card-1");
const image_card_2 = document.getElementById("image__card-2");
const image_card_3 = document.getElementById("image__card-3");
const image_card_4 = document.getElementById("image__card-4");

document.addEventListener("scroll", (event) => {
  const positionY = window.scrollY;

  title.style.fontSize = `${100 + positionY * 0.5}px`;
  //   bg_1.style.top = `-${positionY * 0.5}px`;
  //   bg_2.style.top = `-${positionY}px`;
  //   bg_2.style.scale = 1 + positionY * 0.001;

  image_card_1.style.transform = `translateY(${positionY * -0.5 + 600}px)`;
  image_card_2.style.transform = `translateY(${positionY * 0.1 + -50}px)`;
  image_card_3.style.transform = `translateY(${positionY * -0.1 + 100}px)`;
  image_card_4.style.transform = `translateY(${positionY * 0.2 + -125}px)`;

  const _newOpacity = positionY * 0.001;

  image_card_1.opacity = 0.6;

  if (_newOpacity >= 0 && _newOpacity <= 1) {
    image_card_1.style.opacity = _newOpacity;
    image_card_2.style.opacity = _newOpacity;
    image_card_3.style.opacity = _newOpacity;
    image_card_4.style.opacity = _newOpacity;
  }
});
