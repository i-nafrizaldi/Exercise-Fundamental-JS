// function segitiga(height){
//   for (i=1 ; i<=height;i++){
//     let row = ""
//     for (j=1 ; j<= i ; j ++){
//       row += j + " "
//     }
// console.log(row);

//   }
// }
// segitiga (5)

// no.1 ****************************************************
// function polaSegitiga(height) {
//   for (let i = 1, num1 = 1; i <= height; i++) {
//     const row = Array.from({ length: i }, () => num1++)
//       .map((number) => number.toString().padStart(2, "0"))
//       .join(" ");

//     console.log(row);
//   }
// }
// polaSegitiga(5)
//*************************************************** */
function segitiga1(height1) {
  let currentNumber = 1;

  for (let i = 1; i <= height1; i++) {
    let row1 = "";

    for (let j = 1; j <= i; j++){
      row1 =+ (currentNumber < 10 ? "0" : "") + currentNumber + " "  ;
    }
    console.log(row1);
  };
  currentNumber++;
}
segitiga1(5);

// //no.2

// function fizzBuzz(n) {
//   const result = [];

//   for (let i = 1; i <= n; i++) {
//     let currentElement = "";

//     if (i % 3 === 0) currentElement += "Fizz";
//     if (i % 5 === 0) currentElement += "Buzz";

//     result.push(currentElement || i);
//   }

//   return result;
// }

// const resultArray = fizzBuzz(15);
// console.log(resultArray);

// //no.3

// function bodyMass(berat, tinggi) {
//   const score = berat / (tinggi ** 2);
//   console.log(score);

//   if (score < 18.5) {
//     return "less weight";
//   }
//   if (score <= 24.9) {
//     return "ideal";
//   }
//   if (score <= 29.9) {
//     return "overweight";
//   }
//   if (score < 39.9) {
//     return "very overweight";
//   }
//   return "obesity";
// }
// console.log(bodyMass(85, 1.7));

//no.4
// const number4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result4 = number4.filter((ganjil) => ganjil % 2 === 0);
// console.log(result4);

// menggunakan build in method

function hapusGanjil(array5) {
  return array5.filter((item) => item % 2 === 0);
}
const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(hapusGanjil(inputArr));

// tanpa build in method

function hapusGanjil1(arr1) {
  const evenNumbers = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      evenNumbers.push(arr1[i]);
    }
  }
  return evenNumbers;
}
const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(hapusGanjil1(input1));

//no.5

function split5(input5) {
  return input5.split(" ");
}
console.log(split5("Hello worlf"));

// tanpa build in method

const splitString = function (intput6) {
  let kata = [];
  let temp = "";

  for (let i = 0; i < intput6.length; i++) {
    if (intput6[i] === " ") {
      kata.push(temp);
      temp = "";
      continue;
    }
    temp += intput6[i];
  }
  kata.push(temp);
  return kata;
};
console.log(splitString("Hello World"));
