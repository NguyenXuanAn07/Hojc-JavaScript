const signInBtn = document.getElementById("btn");
const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");

const input = document.getElementsByClassName("input");
signInBtn.addEventListener("click", () => {
  console.log(userName.value, passWord.value);
  if (userName.value === "XuanAnNguyen" && passWord.value === "123456") {
    alert("Log in successfully!");
    (window, (location.href = "../lab04/success.html"));
  } else {
    alert("Username or password was wrong!");
    userName.style.borderBlock = "red";
    passWord.style.borderBlock = "red";
  }
});
