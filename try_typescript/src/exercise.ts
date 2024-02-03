const name2: string = "matsuoka";
console.log(name2);

const age2: number = 21;
console.log(age2);

const bool3: boolean = true;
console.log(bool3);

const arr: string[] = ["A", "C", "F", "G", "H"];

for (const a of arr) {
  console.log(a);
}

type Person = {
  name: string;
  age: number;
  email: string;
  inClassRoom: boolean;
};
const person: Person = {
  name: "name",
  age: 12,
  email: "a@b.com",
  inClassRoom: false,
};
console.log(person);

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 8));

const add2: (a: number, b: number) => number = (a, b) => a + b;
console.log(add2(5, 6));

function add3<T>(arr: T[], val: T): T[] {
  arr.push(val);
  return arr;
}
console.log(add3<number>([1, 2, 3], 3));
console.log(add3<string>(["a", "b", "c"], "d"));

export { name2, age2, bool3, arr, add, add2, add3, Person };
