// TWO SUM =======================================================================================
// function twoSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// const arr1 = [3,2,4];
// const target1 = 6;
// const result = twoSum(arr1, target1);
// console.log(result);

// function twoSum1(nums, target) {
//   const result = [];
//   nums.forEach((num, index) => {
//     if (nums.includes(target - num)) {
//       result.push(index);
//     }
//   });
//   return result;
// }
// console.log(twoSum1([3, 2, 4], 6));

// palindrome  =======================================================================================
// const number = 121;
// function isPalindrome(n) {
//   return parseInt(n.toString().split("").reverse().join("")) === n;
// }
// console.log(isPalindrome(number));

// palindrome tanpa konvert ke string ====================================================================

// var isPalindrome = function (x) {
//   let reversedInteger = 0;
//   let remainder = 0;
//   let num = x;

//   while (num > 0) {
//     remainder = num % 10; //1
//     reversedInteger = reversedInteger * 10 + remainder;
//     num = Math.floor(num / 10); //12
//   }
//   return x == reversedInteger;
// };
// console.log(isPalindrome(121));

//======================================================================
/*
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

 */
// const roman = (s) => {

// let rom = (s) => {
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let res = 0;
//   let split = s.split("")
//   console.log(split);
//   split.forEach((num, i) => {
//     console.log(map[s]);
//     if (map[num] < map[s[i + 1]]) res -= map[num];
//     else res += map[num];
//   });
//   return res;

//   let ans = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]] < map[s[i + 1]]) {
//       ans += map[s[i + 1]] - map[s[i]];
//       i++;
//       continue;
//     } else {
//       ans += map[s[i]];
//     }
//   }
//   return ans;
//   // return ans.reduce((total, current) => total + current);
// };
// // const kkk = rom("MCMXCIV");
// // console.log(kkk);
// console.log(rom("MCMXCIV"));

//====================================================================
//  let hasil =[]
// //  if(nums.filter((item)=>item==item)){

// //  }

// var removeDuplicates = function (nums) {
//   const result = [];
//   const duplicate = [];
//   for (let i = 0; i < nums.length; i++) {
//     let cek = nums[i];
//     if (!duplicate.includes(cek)) {
//       duplicate.push(cek);
//     } else {
//       !result.includes(cek);
//       result.push(cek);
//     }
//   }
//   return duplicate;
// };
// console.log(removeDuplicates([1, 1, 2]));
//=================================================

// const str = ['flow','flower','flight']
// const cek = ""
// const cek2 = ""

// for (let i = 0; i < str.length; i++) {
// const cek = str[i]
// console.log(cek.charAt(0));
// }

const n = 10;
let output = true;
let y = 0;
let x = 0;
while (y < n) {
  y = Math.pow(2, x);
  x++;
  console.log(y);
}
if (y == n && y !== 0) {
  output = true;
} else {
  output = false;
}
console.log(output);
