function klik() {
  alert("PERINGATAN")
}

function updateJam() {
  var currentTime = new Date();

  document.getElementById("realTime").innerHTML = currentTime;
}
setInterval(updateJam, 1000);
updateJam();
