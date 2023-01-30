const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const quantityInput = document.querySelector("#quantity");

minusButton.addEventListener("click", function () {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

plusButton.addEventListener("click", function () {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});
