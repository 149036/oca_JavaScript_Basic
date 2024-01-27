type A = {
  name: string;
  readonly fn?: () => void;
};

const a: A = { name: "name", fn: () => void {} };

console.log(a);
