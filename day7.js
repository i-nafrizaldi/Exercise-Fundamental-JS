// no.1 ===================================================================
// function equal(a, b) {
//   if (obj1.a === obj2.a) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const obj1 = { a: "1" };
// const obj2 = { a: "1" };
// console.log(equal(obj1, obj2));

// pembahasan lecture ***********************************************************

// function areObjectEqual(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);
//   if (key1.length !== key2.length) {
//     return false;
//   }
//   for (const key of key1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// const arg1 = { a: 1 };
// const arg2 = { a: 1 };
// console.log(areObjectEqual(arg1, arg2));

//no 2 INTERSECTION ==========================================================================================

// function cariYangSama(obj21, obj22) {
//   const hasil21 = {};

//   for (const key1 in obj21) {
//     if (obj22.hasOwnProperty(key1) && obj22[key1] === obj21[key1]) {
//       hasil21[key1] = obj21[key1];
//     }
//   }

//   return hasil21;
// }

// const obj21 = { a: 1, b: 2 };
// const obj22 = { a: 1, c: 3 };

// const hasil2 = cariYangSama(obj21, obj22);
// console.log(hasil2);

// PEMBAHASAN LECTURE **********************************************

// const intersection = (obj1, obj2) => {
//   const duplicate = {};

//   for (let key in obj1) {
//     if (obj1[key] == obj2[key]) {
//       duplicate[key] = obj1[key];
//     }
//   }
//   return duplicate;
// };
// const arg1 = { a: 1, b: 2 };
// const arg2 = { a: 1, c: 3 };
// console.log(intersection(arg1, arg2));

//no 3 ===========================================================================================

// function mergeAndRemoveDuplicates(array1, array2) {
//   const mergedArray = array1.concat(array2);

//   const uniqueArray = Array.from(
//     new Set(mergedArray.map((student) => student.email))
//   ).map((email) => mergedArray.find((student) => student.email === email));

//   return uniqueArray;
// }

// const array1 = [
//   { name: "ateng galon", email: "ateng@mail.com" },
//   { name: "marwan AC", email: "marwan@mail.com" },
// ];

// const array2 = [
//   { name: "ateng galon", email: "ateng@mail.com" },
//   { name: "rahmat Astra", email: "rahmat@mail.com" },
// ];

// const arrayResult = mergeAndRemoveDuplicates(array1, array2);
// console.log(arrayResult);

//PEMBAHASAN LECTURE **********************************************

// const removeDuplicate = (arr1, arr2) => {
//   const combineArray = [...arr1, ...arr2];

//   const temp = [];

//   for (let i = 0; i < combineArray.length; i++) {
//     const duplicateValues = temp.filter((value) => {
//       // console.log(value);
//       return value.email === combineArray[i].email;
//     });
//     // console.log(duplicateValues);
//     // console.log(combineArray[i]);

//     if (!duplicateValues.length) {
//       temp.push(combineArray[i]);
//     }
//   }
//   return temp;
// };
// const arg1 = [
//   { name: "ateng galon", email: "ateng@mail.com" },
//   { name: "marwan AC", email: "marwan@mail.com" },
// ];

// const arg2 = [
//   { name: "ateng galon", email: "ateng@mail.com" },
//   { name: "rahmat Astra", email: "rahmat@mail.com" },
// ];
// console.log(removeDuplicate(arg1, arg2));

//no 4 ===========================================================================================

// function tukar(object1) {
//   const swap = Object.entries(object1[0]).map(([key, value]) => [value, key]);
//   return Object.fromEntries(swap);
// }
// const array41 = [{ name: "david", age: 20 }];
// console.log(tukar(array41));

// PEMBAHASAN LECTURE *******************************************

// const switchValue = (arr) => {
//   const result = [];

//   arr.forEach((item) => {
//     console.log(item);
//     let temp = {};

//     for (let key in item) {
//       // console.log(item);
//       // console.log(item[key]);
//       // console.log(key);
//       temp[item[key]] = key;
//     }
//     result.push(temp);
//   });
//   return result;
// };

// const arg = [{ name: "david", age: 20 }];
// console.log(switchValue(arg));

//no 5 ===========================================================================================

function hitungFaktor(n) {
  if (n === 1) {
    return {
      steps: ["1"],
      total: 1,
    };
  } else {
    const next = hitungFaktor(n - 1);
    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
}
const nilai = 5;
const { steps, total } = hitungFaktor(4);
console.log(steps.join)("x") + "=" + total;

// PEMBAHASAN LECTURE ************************************
