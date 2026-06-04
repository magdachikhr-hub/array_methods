const arr1 = [3, 54, 7, 2, 546, 9];

const newArr = arr1.map((num) => {
  return num * 100;
});

//returns new arr

console.log(newArr);

//map is like foreach

arr1.forEach((num) => {
  let result = num * 10;
  console.log(result);
});

//doesnt return new arr

let words = ["hello", "how", "what", "some"];

// const newWordsArr = words.map((word) => word.length >= 4);

const newWordsArr = words.map((word) => {
  if (word.length >= 4) {
    return word;
  } else {
    return "_";
  }
});

console.log(newWordsArr);
