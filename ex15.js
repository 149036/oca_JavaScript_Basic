fs.readdir(".", (err, files) => {
  console.log("fs.readdir()");
  console.log("err", err);
  console.log("files", files);
});

fs.readdir("./a", (err, files) => {
  console.log("fs.readdir()");
  console.log("err", err);
  console.log("files", files);
});
