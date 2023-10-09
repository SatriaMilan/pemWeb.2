
const bilanganPertamaInput = document.getElementById("bilanganPertama");
const bilanganKeduaInput = document.getElementById("bilanganKedua");
const btnHitung = document.getElementById("btn-hitung");
const btnReset = document.getElementById("btn-reset");


function hitung() {
  const bilanganPertama = parseFloat(bilanganPertamaInput.value);
  const bilanganKedua = parseFloat(bilanganKeduaInput.value);

 
  if (!isNaN(bilanganPertama) && !isNaN(bilanganKedua)) {
    const hasil = bilanganPertama + bilanganKedua;
    alert(`Hasil penjumlahan: ${hasil}`);
  } else {
    alert("Masukkan bilangan yang valid");
  }
}


function reset() {
  bilanganPertamaInput.value = "";
  bilanganKeduaInput.value = "";
}


btnHitung.addEventListener("click", hitung);

btnReset.addEventListener("click", reset);
