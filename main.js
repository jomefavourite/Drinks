function call(name) {
  return document.querySelector(name);
}

const preview = call(".hero__image__preview");
const toggleOne = call("#toggle-one");
const toggleTwo = call("#toggle-two");
const toggleThree = call("#toggle-three");

function toggleImage() {
  let attribute = this.attributes[0].textContent;
  let color = this.dataset.color;
  preview.setAttribute("src", attribute);

  switch (color) {
    case "blue":
      document.body.style.backgroundColor = "#005a99";
      break;
    case "red":
      document.body.style.backgroundColor = "#cf1027";
      break;
    case "black":
      document.body.style.backgroundColor = "#0f1214";
      break;

    default:
      document.body.style.backgroundColor = "#005a99";
      break;
  }
}

toggleOne.addEventListener("click", toggleImage);
toggleTwo.addEventListener("click", toggleImage);
toggleThree.addEventListener("click", toggleImage);
