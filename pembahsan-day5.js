//no.4

function sumArray(arr1, arr2) {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }
  return result;
}
console.log(sumArray([1, 2, 3], [1, 2, 3, 4, 5]));

// no.7 ===================================================================

function maxSize(number, max) {
  const result = [];

  number.forEach((item) => {
    if (result.length === max) return;
    result.push(item);
  });
  return result;
}

const max = 5;
const number = [1, 2, 3, 4, 5, 6, 7];

console.log(maxSize(number, max));

//no. 14
function sumDuplicat(arr14) {
  const duplicatevalues = arr14.filter((value, index, array) => {
    return array.indexOf(value) !== index;
  });
  console.log(duplicatevalues);

  let result = 0;
  for (let item of arr14) {
    if (duplicatevalues.includes(item)) {
      result += item;
    }
  }
  return result;
}

console.log(sumDuplicat([10, 20, 40, 10, 50, 30, 10, 60, 10]));

//no.15
function suit(player) {
  const choices = ["gunting", "batu", "kertas"];
  const compChoice = choices[Math.floor(Math.random() * 2.9)];

  if (!choices.includes(player)) {
    return "wrong input";
  }

  if (player === compChoice) {
    return "Draw";
  }
  if (
    (player === "batu" && compChoice === "gunting") ||
    (player === "guinting" && compChoice === "kertas") ||
    (player === "kertas" && compChoice === "batu")
  ) {
    return "Win";
  }
  return "Lose";
}

console.log(suit("kertas"));
