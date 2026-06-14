console.log("video 51");

const element = document.getElementById("AnBtn");
console.log(element);

const handleClickBtn = () => {
  console.log("You click a button");
};
element.addEventListener("click", handleClickBtn);
