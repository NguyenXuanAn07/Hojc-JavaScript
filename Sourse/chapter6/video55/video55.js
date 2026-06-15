const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const pre = document.getElementById("preName")
const preName = localStorage.getItem("XuanAn");
if(preName) {
    pre.innerHTML = `<b>${preName}</b>`
}
btn.addEventListener("click", () => {
  //console.log(input.value);
  localStorage.setItem("XuanAn", input.value);
  document.getElementById("message").innerHTML = `<b> ${input.value}</b>`;
});
