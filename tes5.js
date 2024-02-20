// // const ar1 = [1, 2, 3, 4, 5];
// // const ar2 = [3, 4, 5, 6, 7];

// // const gab = ar1.concat(ar2);
// // console.log(gab);

// // function beda(a) {
// //   let hasil = [];
// //   let cek10 = [];
// //   let result10 = [];
// //   for (let i = 0; i < a.length; i++) {
// //     let cekNilai10 = a[i];

// //     if (!cek10.includes(cekNilai10)) {
// //       cek10.push(cekNilai10);
// //     } else {
// //       !hasil.includes(cekNilai10);
// //       hasil.push(cekNilai10);
// //     }
// //   }

//   for (let j = 0; j < cek10.length; j++) {
//     let cekNilai101 = cek10[j];

//     if (!hasil.includes(cekNilai101)) {
//       result10.push(cekNilai101);
//     }
//   }
//   return result10;
// }

// console.log(beda(gab));

// const a = [1, 2, 3, 4, 5, 6, 7];
// const b = [3, 4, 5];
// let c = [];

// for (let i = 0; i < a.length; i++) {
//   let cek = a[i];
//   console.log(cek);
//   if (!b.includes(cek)) {
//     c.push(cek)
//     console.log(cek);
//   }
// }

// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// function duplikat(arr) {
//   let hasil = [];
//   let cek9 = [];

//   for (let i = 0; i < arr.length; i++) {
//     let cekNilai = arr[i];

//     if (!cek9.includes(cekNilai)) {
//       cek9.push(cekNilai);
//     } else {
//       if (!hasil9.includes(cekNilai)) {
//         hasil9.push(cekNilai);
//       }
//     }
//   }

//   return hasil9;
// }
// console.log(duplikat(arr9));


//11

const ar = [5,3,1,7,2,6]
const urut = ar.sort((a,b)=>a-b)

console.log(urut); 