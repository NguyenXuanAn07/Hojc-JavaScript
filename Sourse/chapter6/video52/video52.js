console.log("video 52");

const myBtn = document.getElementById("myBtn");
const backBtn = document.getElementById("backBtn");
const myText = document.getElementById("myText");
console.log(myBtn, myText);

myBtn.addEventListener("click", () => {
  alert("You click on button to change the text");
  myText.innerText = "Just change the content with Xuan An";
});

backBtn.addEventListener("click", () => {
  alert("Change successfully");
  myText.innerText = "Video 52";
});
