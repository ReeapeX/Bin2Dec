const error = document.getElementById("errorMsg");

function convert() {
  const input = document.getElementById("binaryInput").value;

  // 2. Prüfe mit Regex:
  // ^ = Start, [01] = nur 0 oder 1 erlaubt, + = mindestens ein Zeichen, $ = Ende
  if (!input.match(/^[01]+$/)) {
    error.textContent = "Your input can only be 0 or 1!";
    return;
  } else {
    error.textContent = "Alles richtig!";
  }
}
