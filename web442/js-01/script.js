// for (let i = 0; i <= 10; i++) {
//   console.log(`count number ${i}`);
// }

const numArr = ["one", "two", "three", "four"];
// for (let i = 0; i <= numArr.length; i++) {
//   console.log(`ยกน้ำหนักครั้งที่ ${numArr[i]}`);
// }

// let count = 0;
// while (count < numArr.length) {
//   console.log(`count #${numArr[count]}`);
//   count++;
// }
// numArr.forEach(function (num) {
//   console.log(`Show number ${num}`);
// });

// numArr.forEach((num) => console.log(`num => ${num}`));

// numArr.forEach((v, i, a) => console.log(`${v}, ${i}, ${a}`));

// const person = {
//   name: "James",
//   age: 28,
//   gender: "male",
// };

// for (const key in person) {
//   console.log(`${key} => ${person[key]}`);
// }

// for (const key of numArr) {
//   console.log(num);
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumFor = 0;
let sumForEach = 0;
let sumForIn = 0;
let sumForOf = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] % 3 === 0 ? (sumForIn += numbers[i]) : null;
}

numbers.forEach((num) => (num % 3 === 0 ? (sumForEach += num) : null));

for (const num of numbers) {
  num % 3 === 0 ? (sumForOf += num) : null;
}

console.log(
  `sumFor: ${sumFor}, \nsumForEach: ${sumForEach}, \nsumForIn: ${sumForIn}, \nsumForOf: ${sumForOf}`
);

// const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Number.forEach(myFunction);

// function myFunction(item) {
//   if (item % 3 == 0) {
//     console.log(item);
//   }
// }

// const sqrNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   sqrNumbers.push(numbers[i] * numbers[i]);
// }

const sqrNumbers = numbers.map((num) => {
  return num * num;
});
console.log(sqrNumbers);

// หาผลรวมของ numbers
const sumNum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sqrNumbers.reduce((acc, cur) => acc + cur));

const rndNumber = [1, 2, 4, 9, 5, 6, 3, 8, 7];
