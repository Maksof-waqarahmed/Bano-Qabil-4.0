const arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//   console.log(item * 2);
// });

// arr.forEach((item) => {
//   if (item % 2 === 0) {
//     console.log("Even Number " + item);
//   } else {
//     console.log("Odd Number " + item);
//   }
// });

// arr.forEach((item) => console.log(item * 2));

// arr.forEach((item, index) => console.log("index of " + item + " is " + index));

// let sum = 0;
// const answer = arr.map((item) => {
//    return sum += item; //sum = sum + item
// })

// const answer = arr.map((item, index) => sum += item);

// const ages = [23, 34, 6, 78, 8, 98, 9, 4, 43, 45, 65, 476];
// const filteredArr = ages.filter((age) => {
//   return age >= 18;
// });

// const filteredArr = ages.filter(age => age >= 18);

// console.log(filteredArr);

const arr2 = ["Waqar", "Ahmed", "Ali", "Hassan", "Ali", "Ali", "Ali"];
const found = arr2.find((name) => name === "Ali");
console.log(found);
