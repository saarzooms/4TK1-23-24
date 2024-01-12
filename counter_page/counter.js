var counter = 0;
var capacity = 0;
function setCapacity() {
  capacity = document.getElementById("txtCapacity").value;
  document.getElementById("txtCapacity").value = "0";
  document.getElementById("remaining_output").innerText = capacity - counter;
  document.getElementById("capacity_container").style.display = "none";
  document.getElementById("counter_display").style.display = "block";
}
function inc() {
  if (counter < capacity) {
    counter++;
    document.getElementById("remaining_output").innerText = capacity - counter;
    document.getElementById("counter_output").innerText = counter;
  } else {
    document.getElementById("remaining_display").style.display = "none";
    document.getElementById("msg").style.display = "block";
  }
}
function dec() {
  if (counter != 0) {
    counter--;
    document.getElementById("remaining_output").innerText = capacity - counter;
    document.getElementById("counter_output").innerText = counter;
    document.getElementById("remaining_display").style.display = "block";
    document.getElementById("msg").style.display = "none";
  }
}
function reset() {
  counter = 0;
  document.getElementById("remaining_output").innerText = capacity - counter;
  document.getElementById("counter_output").innerText = counter;
  document.getElementById("remaining_display").style.display = "block";
  document.getElementById("msg").style.display = "none";
}
function resetCapacity() {
  capacity = 0;
  counter = 0;
  document.getElementById("capacity_container").style.display = "block";
  document.getElementById("counter_display").style.display = "none";
  document.getElementById("remaining_display").style.display = "block";
  document.getElementById("msg").style.display = "none";
}
