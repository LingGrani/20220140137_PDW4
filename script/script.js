function klik() {
  alert("PERINGATAN")
} //fungsi pop up sederhana ketika button ditekan

function updateJam() {
  var currentTime = new Date();
  document.getElementById("realTime").innerHTML = currentTime;
} //fungsi memasukan waktu kedalam html element

setInterval(updateJam, 1000); // menjalankan fungsi setiap 1000ms/1 detik
updateJam();
