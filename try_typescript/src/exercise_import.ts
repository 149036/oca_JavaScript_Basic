import {
  name2,
  age2,
  bool3,
  arr,
  add,
  add2,
  add3,
  Person,
} from "./exercise.js";

const person: Person = {
  name: "name",
  age: 12,
  email: "a@b.com",
  inClassRoom: false,
};
for (const a of arr) {
  console.log(a);
}

console.log(name2);
console.log(age2);
console.log(bool3);
console.log(person);
console.log(add(10, 8));
console.log(add2(5, 6));
console.log(add3<number>([1, 2, 3], 3));
console.log(add3<string>(["a", "b", "c"], "d"));
