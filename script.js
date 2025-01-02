let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let randomColor = Math.round(Math.random() * 1000000);
  let concate = "#" + randomColor;
  document.body.style.backgroundColor = concate;
  let hexCode = document.querySelector("span");
  hexCode.innerText = concate;
});
