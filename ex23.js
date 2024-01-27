async function* asyncGen() {
  let i = 0;
  while (i <= 3) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i++;
  }
}

for await (const element of asyncGen()) {
  console.log(element);
}
