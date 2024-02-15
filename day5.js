//no.1

function findMinMaxAvg(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  let avg = 0;

  for (let i = 0; i < numbers.length; i++) {
    avg += numbers[i] / numbers.length;
  }
  const hasil = "max = " + max + ", min = " + min + ", average = " + avg;
  return hasil;
}
const arrayAngka = [5, 2, 9, 1, 7, 3, 8];
const result = findMinMaxAvg(arrayAngka);
console.log(result);

//no.2  =========================================================
function separator(params) {
  const indexAkhir = namaBuah.pop();
  const join = namaBuah.join(", ");
  const gabung = join + ", dan " + indexAkhir;
  return gabung;
}

const namaBuah = ["apple", "banana", "cherry", "date"];
const result2 = separator(namaBuah);
console.log(result2);
//no.3 ==================================================================

function split(str) {
  return str.split(" ");
}
console.log(split("Hello world"));

//no.4 ================================================================================
const nilaiArray1 = [1, 2, 3];
const nilaiArray2 = [3, 2, 1];

function jumlahArray(a, b) {
  return a.map((n, i) => n + b[i]);
}
const result4 = jumlahArray(nilaiArray1, nilaiArray2);
console.log(result4);

//no.5 ================================================================================
function inputElement(params5) {
  const angka5 = [1, 2, 3, 4];
  const newAngka5 = angka5.push(newElement5);
  return angka5;
}
const newElement5 = 7;
const result5 = inputElement(newElement5);
console.log(result5);

//no.6 ================================================================================
const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function genap(a) {
  return a.filter((item) => item % 2 === 0);
}
const result6 = genap(ar1);
console.log(result6);

//no.7 ================================================================================
// const angka7 =
// console.log(angka7);
//no.8 ================================================================================
const arr81 = [1, 2, 3];
const arr82 = [4, 5, 6];

function concatArr(a, b) {
  return a.concat(b);
}
let result8 = concatArr(arr81, arr82);
console.log(result8);

//no.9 ================================================================================
const arr9 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
function duplikat(arr) {
  let hasil9 = [];
  let cek9 = [];

  for (let i = 0; i < arr.length; i++) {
    let cekNilai = arr[i];

    if (!cek9.includes(cekNilai)) {
      cek9.push(cekNilai);
    } else {
      if (!hasil9.includes(cekNilai)) {
        hasil9.push(cekNilai);
      }
    }
  }

  return hasil9;
}

const nilaiDuplikat = duplikat(arr9);

console.log(nilaiDuplikat);

// const arr9 = [2, 1, 2, 2, 3, 3, 4, 5, 5];
// console.log(arr9.filter((aa, bb, arrr) => arrr.indexOf(aa) !== bb));

//no.10 ================================================================================
const ar101 = [1, 2, 3, 4, 5];
const ar102 = [3, 4, 5, 6, 7];

const gab = ar101.concat(ar102);
console.log(gab);

function beda(a) {
  let hasil = [];
  let cek10 = [];
  let result10 = [];
  for (let i = 0; i < a.length; i++) {
    let cekNilai10 = a[i];

    if (!cek10.includes(cekNilai10)) {
      cek10.push(cekNilai10);
    } else {
      !hasil.includes(cekNilai10);
      hasil.push(cekNilai10);
    }
  }

  for (let j = 0; j < cek10.length; j++) {
    let cekNilai101 = cek10[j];

    if (!hasil.includes(cekNilai101)) {
      result10.push(cekNilai101);
    }
  }
  return result10;
}

console.log(beda(gab));
//no.11 ================================================================================

//no.12 ================================================================================
//no.13 ================================================================================
//no.14 ================================================================================
//no.15 ================================================================================
