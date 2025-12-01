const error = document.getElementById("errorMsg");
const resultMsg = document.getElementById("decimalOutput");

let array = [];
let resultList = [];
let endResult = 0;

function convert() {
  const input = document.getElementById("binaryInput").value;

  // 2. Prüfe mit Regex:
  // ^ = Start, [01] = nur 0 oder 1 erlaubt, + = mindestens ein Zeichen, $ = Ende
  if (!input.match(/^[01]+$/)) {
    error.textContent = "Your input can only be 0 or 1!";
    return;
  } else {
    array = input.split("");

    array.reverse();

    for (let index = 0; index < array.length; index++) {
      endResult += array[index] * 2 ** index;
      console.log(index);
    }
    console.log("Endresult: " + endResult);
    resultMsg.textContent = endResult;
  }

  endResult = 0;
  array.length = 0;

  //for (Initialisierung; Bedingung; Befehlsfolge) { //Anweisungen }
}
