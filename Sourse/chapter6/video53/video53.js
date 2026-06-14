const myBtn = document.getElementById("myBtn");
const backBtn = document.getElementById("backBtn");
const myText = document.getElementById("myText");

myBtn.addEventListener("click", () => {
  alert("This is function changing the color!");
  myText.style.color = "red";
  myText.style.backgroundColor = "green";
  myText.classList.add("Xuan", "An");
});
backBtn.addEventListener("click", () => {
  alert("This is function changing back the color!");
  myText.style.color = "black";
  myText.style.backgroundColor = "unset";
  myText.classList.remove("Xuan", "An");
});
