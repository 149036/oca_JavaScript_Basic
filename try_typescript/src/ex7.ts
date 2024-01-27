type Animal2 = {
  species: string;
};

type Human2 = {
  name: string;
};

type Age = {
  age: number;
};

type User2 = Animal2 | Human2 | Age;

const user2: User2 = {
  name: "tama",
  species: "cat",
  age: 2,
};

console.log(user2);
