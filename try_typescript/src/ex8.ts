type MyType<T> = {
  add: (a: T, b: T) => T;
};

const num: MyType<number> = {
  add: (a, b) => a + b,
};

const str: MyType<string> = {
  add: (a, b) => a + b,
};

console.log(num.add(1, 2));
console.log(str.add("1", "2"));
