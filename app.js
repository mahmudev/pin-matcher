let tryLeft = 3;
function generatePin() {
  return Math.floor(1000 + Math.random() * 9000);
}
document.getElementById("generate-pin").addEventListener("click", function () {
  document.getElementById("display-pin").value = generatePin();
});
function handlePinInput(event) {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById("typed-number");
  const previousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      typedNumberField.value = previousTypedNumber.slice(0, -1);
    }
  } else {
    typedNumberField.value += number;
  }
}
document.getElementById("calculator").addEventListener("click", handlePinInput);
document.getElementById("verify-pin").addEventListener("click", function () {
  const currentPin = document.getElementById("display-pin").value;
  const typedNumber = document.getElementById("typed-number").value;
  const pinSuccessMessage = document.getElementById("pin-success");
  const pinFailureMessage = document.getElementById("pin-failure");
  if (typedNumber === currentPin) {
    pinSuccessMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    pinFailureMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }
  if (tryLeft > 1) {
    tryLeft--;
    document.getElementById("try-left").innerText = tryLeft;
  } else {
    document.getElementById("try-left").innerText = 0;
    document.getElementById("verify-pin").disabled = true;
  }
});
