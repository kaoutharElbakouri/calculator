// Clears the screen on click of C button.
function clearAllScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
    res.value += value;
}
