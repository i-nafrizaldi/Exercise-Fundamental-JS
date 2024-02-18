// no.1 ===================================================================
function equal(a, b) {
  if (obj1.a === obj2.a) {
    return true;
  } else {
    return false;
  }
}
const obj1 = { a: "1" };
const obj2 = { a: "1" };
console.log(equal(obj1, obj2));

//no 2 ==========================================================================================

function cariYangSama(obj21, obj22) {
  const hasil21 = {};

  for (const key1 in obj21) {
    if (obj22.hasOwnProperty(key1) && obj22[key1] === obj21[key1]) {
      hasil21[key1] = obj21[key1];
    }
  }

  return hasil21;
}

const obj21 = { a: 1, b: 2 };
const obj22 = { a: 1, c: 3 };

const hasil2 = cariYangSama(obj21, obj22);
console.log(hasil2);

//no 3 ===========================================================================================
function mergeAndRemoveDuplicates(array1, array2) {
  const mergedArray = array1.concat(array2);

  const uniqueArray = Array.from(
    new Set(mergedArray.map((student) => student.email))
  ).map((email) => mergedArray.find((student) => student.email === email));

  return uniqueArray;
}

const array1 = [
  { name: "ateng galon", email: "ateng@mail.com" },
  { name: "marwan AC", email: "marwan@mail.com" },
];

const array2 = [
  { name: "ateng galon", email: "ateng@mail.com" },
  { name: "rahmat Astra", email: "rahmat@mail.com" },
];

const arrayResult = mergeAndRemoveDuplicates(array1, array2);
console.log(arrayResult);

//no 4 ===========================================================================================

function tukar(object) {
  const swap = Object.entries(array41[0]).map(([key, value]) => [value, key]);
  return Object.fromEntries(swap);
}
const array41 = [{ name: "david", age: 20 }];
console.log(tukar(array1));
//no 5 ===========================================================================================
function hitungFaktor(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * hitungFaktor(n - 1);
  }
}
const nilai = 5;
console.log(hitungFaktor(nilai));
