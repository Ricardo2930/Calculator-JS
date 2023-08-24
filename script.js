const input = document.getElementById("input");
const btn = document.querySelectorAll(".keys");
const remove = document.querySelector(".remove");
const clear = document.querySelector(".clear");
const resultado = document.getElementById("resultado");

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    input.value += e.target.value;
  });
});

clear.addEventListener("click", () => {
  input.value = "";
});

remove.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

resultado.addEventListener("click", () => {
  input.value = eval(input.value);
});

