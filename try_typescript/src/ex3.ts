type A = {
  name: string;
  fn?: () => void;
};

const a: A = { name: "name", fn: () => void {} };

console.log(a);
