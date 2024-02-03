//TODO: type: 文字列
const message: string = "hello";
console.log(message);

//TODO: type: ブール
const bool: boolean = true;
const bool2: boolean = false;

//TODO: type: 配列
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

//TODO: type: null, undef
const noValue1: undefined = undefined;
const noValue2: null = null;

// TODO: function
// function_name(var: type): return_type {}
function sayHello1(name: string): string {
  return `Hello ${name}1!`;
}
console.log(sayHello1("TS"));

// TODO: arrow
const sayHello2: (name: string) => string = (name): string => {
  return `Hello ${name}2!`;
};
console.log(sayHello2("TS"));

// TODO: type: void
const noReturn: () => void = (): void => {
  console.log("no return");
};
noReturn();

// TODO: type: object
const myInfo1: object = { name: "My Name", age: 20 };

// パターンマッチみたい
const myInfo2: { name: string; age: number } = { name: "My Name", age: 20 };

// TODO: type: MyInfo型
type MyInfo = { name: string; age: number };
const newMyInfo: MyInfo = { name: "My Name", age: 20 };

// TODO: type: optional ?
type MyInfo2 = { name: string; age?: number };
const noAgeInfo: MyInfo2 = { name: "No Age Name" };
console.log(noAgeInfo.age);

// readonly
type MyInfo3 = { readonly name: string; age?: number };
const readOnlyName: MyInfo3 = { name: "My Name" };
readOnlyName.age = 25;
// readOnlyName.name = "NEW NAME";

// TODO: type: any
let anyValue: any = "Any Name";
anyValue = 123;
anyValue = false;
anyValue = "false";

console.log(anyValue.toUpperCase());

// TODO: type: union

type Animal = {
  species: string;
};

type Human = {
  name: string;
};

type User = Animal | Human;

const tama: User = {
  species: "cat",
};

const mike: User = {
  name: "Mike",
};

// const bob: User = {
//   age: 33;
// }

// generics
type Data<T> = {
  dataType: T;
};

const strData: Data<string> = { dataType: "文字列" };
const numData: Data<number> = { dataType: 123 };

function makeArray<T>(param1: T, param2: T): T[] {
  return [param1, param2];
}

// console.log(add<string>("abc", "xyz"));
// console.log(add<number>(1, 2));

