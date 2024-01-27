function hello(): void {
  const message: string = "hello";
  console.log(message);
}
hello();


const hello2: () => void = (): void => {
  console.log("hello2");
};
hello2();
