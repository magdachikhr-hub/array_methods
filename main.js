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

//some

const result = arr1.some((num) => num > 100);
console.log(result);

const res1 = arr1.every((n) => n < 100);
console.log(res1);

const names = ["natia", "nino", "nluka", "nmagda"];

const res2 = names.some((name) => name.startsWith("m"));

console.log(res2);

const res3 = names.every((name) => name.startsWith("n"));

console.log(res3);

//reverse

console.log(names.reverse());

//
const user = {
  name: "natia",
  age: 23,
};

const game = {
  genre: "sci-fi",
  year: 1993,
};
console.log(Object.keys(user));

//green - a class

const food = {
  spicy: "true",
  sour: "false",
};

console.log(Object.keys(food));

console.log(Object.values(game));

console.log(Object.values(food));
console.log(Object.entries(user));

//
console.log(Object.hasOwn(game, "year"));

//ctrl and click to open library

console.log(Object.hasOwn(user, "surname"));
