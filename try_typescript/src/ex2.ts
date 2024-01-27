const myInfo: { name: string; age: number } = { name: "a", age: 1 };
console.log(myInfo);

// myInfo.name = 23; // 型エラー
myInfo.name = "abc";
console.log(myInfo);
