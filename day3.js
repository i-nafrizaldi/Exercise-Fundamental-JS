// // //no.1
// // const angkaTetap = 9;

// // for (let i = 0; i <= 10; i++) {
// //   //   let hasil = angkaTetap * i;

// //   console.log(angkaTetap + " X " + i + " = " + angkaTetap * i);
// // }

// // //no2 ==========================================================
// // //palindrome
// // // menggunakan build in method
// // // let inputKata = "apa";

// // let kata = inputKata.toLowerCase();

// // kata = kata.replace(/[^a-z0-9]/g, "");

// // let isPalindrome = kata === kata.split("").reverse().join("");

// // if (isPalindrome) {
// //   console.log(inputKata + " adalah palindrom.");
// // } else {
// //   console.log(inputKata + " bukan palindrom.");
// // // }

// // // tanpa build in method =======================================
// let inputKata1 = "jogja";
// let balik = "";

// for (let v = inputKata1.length - 1; v >= 0 ; v--) {
//   balik += inputKata1[v];
//   console.log(balik);
// }
// console.log(balik);

// // konversi mata uang ======================================

// // const harga = 10000

// // const rupiah = new Intl.NumberFormat("id-ID",{
// //     style : "currency"
// //     curenccy : "IDR"
// //     maximumFractionDigits : 0
// // })
// // console.log(rupiah.format(harga));

// //no.3 ====================================

// let sentimeter = 100000;
// let toKilometer = sentimeter / 100000;

// console.log(sentimeter + " cm" + " = " + toKilometer + " km");

// //no.4 ==============================
// // let text = "Hello world";
// // let remove = "ell";

// // const index = text.indexOf(remove);
// // console.log(index);
// // console.log(remove.length);
// // if (index !== -1) {
// //   const hasilText = text.slice(0, index) + text.slice(index + remove.length);
// //   console.log(hasilText);
// // } else {
// //   console.log(remove + " Tidak ditemukan.");
// // }

// // menggunakan replace ============================

// const words = "hello world";
// const search = "ell";
// const replaceWith = "";

// const remove = words.replace(search, replaceWith);
// console.log(remove);

// //no.5 =======================================
// let kata2 = "dasar";
// let reverse = kata2.split("").reverse().join("");
// console.log(reverse);

// // huruf pertama kapital ======================
// const word1 = "hello world";
// let word2 = word1.split(" ");

// console.log(word2);

// for (let ii = 0; ii < word2.length; ii++) {
//   word2[ii] = word2[ii][0].toUpperCase() + word2[ii].slice(1);
// //   console.log(word2);
// }
// console.log(word2);
// console.log(word2.join(" "));

// //no.6 ========================

// let kata3 = "The QuiCk BrOwN Fox";
// let hasil3 = "";

// for (let i = 0; i < kata3.length; i++) {
//   let cek3 = kata3[i];

//   if (cek3 === cek3.toUpperCase()) {
//     hasil3 += cek3.toLowerCase();
//   } else {
//     hasil3 += cek3.toUpperCase();
//   }
// }

// console.log(hasil3); // Output: ' tHE qUIcK bRoWn fOX'

// //no.7 ===========================================================

// let bilangan1 = 42;
// let bilangan2 = 27;
// let nilaiTerbesar;

// if (bilangan1 > bilangan2) {
//   nilaiTerbesar = bilangan1;
// } else {
//   nilaiTerbesar = bilangan2;
// }

// console.log(
//   "Nilai terbesar antara " +
//     bilangan1 +
//     " dan " +
//     bilangan2 +
//     " adalah " +
//     nilaiTerbesar
// );

// //no.8 ========================================================================

// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 >= num2 && num1 >= num3) {
//   if (num2 >= num3) {
//     console.log(`${num3}, ${num2}, ${num1}`);
//   } else {
//     console.log(`${num2}, ${num3}, ${num1}`);
//   }
// } else if (num2 >= num1 && num2 >= num3) {
//   if (num1 >= num3) {
//     console.log(`${num3}, ${num1}, ${num2}`);
//   } else {
//     console.log(`${num1}, ${num3}, ${num2}`);
//   }
// } else {
//   if (num1 >= num2) {
//     console.log(`${num2}, ${num1}, ${num3}`);
//   } else {
//     console.log(`${num1}, ${num2}, ${num3}`);
//   }
// }


// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// const smallest = Math.min(num1, num2, num3)
// const largest = Math.max(num1, num2, num3)
// const middle = num1 + num2 + num3 - smallest - largest
// console.log(smallest + ", " +middle+ ", " + largest);
// //no.9 =======================================================================

// let inputData = "hello";
// if (typeof inputData === "string") {
//   console.log(1);
// } else if (typeof inputData === "number") {
//   console.log(2);
// } else {
//   console.log(3);
// }

// //no.10 =================================================================
// let inputString = "An apple a day keeps the doctor away";

// let resultString = "";

// for (let i = 0; i < inputString.length; i++) {
//   let currentChar = inputString[i];

//   if (currentChar.toLowerCase() === "a") {
//     resultString += "*";
//   } else {
//     resultString += currentChar;
//   }
// }

// console.log(resultString);
