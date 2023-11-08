//Christine Nataloa
//121140191
//RC

let ekspresi = "";

function tambahDigit(digit) {
  ekspresi += digit;
  updateLayar();
}

function tambahOperasi(operasi) {
  ekspresi += operasi;
  updateLayar();
}

function hitungHasil() {
  try {
    const hasil = eval(ekspresi);
    ekspresi = hasil.toString();
    updateLayar();
  } catch (error) {
    ekspresi = "Error";
    updateLayar();
  }
}

function hapusSemua() {
  ekspresi = "";
  updateLayar();
}

function updateLayar() {
  document.getElementById("layar").value = ekspresi;
}