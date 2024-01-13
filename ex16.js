function parseJSONAsync1(json, callback) {
  try {
    setTimeout(() => {
      callback(JSON.parse(json));
    }, 1000);
  } catch (err) {
    console.log("エラーをキャッチ", err);
  }
}

parseJSONAsync1("不正", (result) => console.log("pase結果", result));

function parseJSONAsync2(json, callback) {
  setTimeout(() => {
    try {
      callback(null, JSON.parse(json));
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

parseJSONAsync2("不正なJSON", (err, result) =>
  console.log("parse結果", err, result)
);

parseJSONAsync1("不正", (result) => console.log("pase結果", result));
