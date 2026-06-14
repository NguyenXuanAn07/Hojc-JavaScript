const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

btn.addEventListener("click", () => {
  console.log(input.value);
document.getElementById("message").innerHTML = `<b> ${input.value}</b>`
});
