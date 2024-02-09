// 1. Convert celcius ke farenheit
const celcius = 5;
const konversi = celcius * (9 / 5) + 32;

console.log(celcius + " Derajat Celcius = " + konversi + " Derajat Fahrenheit");

// 2. Menentukan bilangan ganjil atau genap
const angka = 24;
// if (angka % 2 === 0) {
//   console.log(angka + " adalah bilangan genap");
// } else {
//   console.log(angka + " adalah bilangan ganjil");
// }
// ternary
console.log(angka % 2 === 0 ? "genap" : "ganjil");
// 3. menentukan bilangan prima

const angkaPrima = 7;
let prima = true;

if (angkaPrima <= 1) {
  prima = false;
} else {
  for (let i = 2; i <= Math.sqrt(angkaPrima); i++) {
    if (angkaPrima % i === 0) {
      prima = false;
      break;
    }
  }
}

if (prima) {
  console.log(angkaPrima + " adalah bilangan prima");
} else {
  console.log(angkaPrima + " bukan bilangan prima");
}

// 4. mencari jumlah bilangan 1 sampai

let N = 7;
let total = 0;
let message = ""
for (let j = 1; j <= N; j++) {
  total += j;
 
  message += j + (j !==N ? " + " :" ")
}

console.log("Jumlah bilangan dari 1 hingga " + N + " adalah " + total);
console.log( message + "= " + total);

//5. mencari faktorial
let faktor = 5;
let total1 = 1;
let mes = ""

for (let i = faktor ; i >= 1; i--) {
  total1 *= i;

  mes += i + (i === 1 ? " " : " x ")
}

console.log(faktor + "!" + " adalah " + total1);
console.log("!"+mes + " = " + total1);

//6. Fibonnaci

let n = 15;
let a = 0,
  b = 1;
let temp = 0;

for (let i = 2; i <= n; i++) {
  temp = a + b;
  a = b;
  b = temp;
  console.log(a);
}
console.log("Fibonacci ke-" + n + " adalah " + b);
