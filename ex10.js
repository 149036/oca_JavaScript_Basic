function e() {
  throw Error("Error");
}

try {
  e();
} catch (e) {
  console.log(e);
} finally {
  console.log("final");
}
