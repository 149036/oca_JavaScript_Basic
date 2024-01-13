function parseJSONAsync(json) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        // 成功
        resolve(JSON.parse(json));
      } catch (err) {
        // 失敗
        reject(err);
      }
    }, 1000)
  );
}

promise1 = parseJSONAsync('{"foo": 1}')
  .then(() => {
    console.log("正常");
  })
  .finally(() => {
    console.log("final");
  });

promise1 = parseJSONAsync("a")
  .catch(() => {
    console.log("異常");
  })
  .finally(() => {
    console.log("final");
  });
