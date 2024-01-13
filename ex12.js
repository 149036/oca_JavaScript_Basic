test_array = ["pom", "qom", "rom"];
test_array.forEach((element) => console.log(element));
new_array = test_array.map((element) => element + "aaa");
new_array;
test_array;

q_array = test_array.filter((element) => element.startsWith("p"));
q_array = test_array.filter((element) => element.startsWith("q"));
find_result = test_array.find((element) => element.endsWith("om"));

array = ["a", "b", "c", "d", "aa"];

new_array = array
  .filter((element) => element.endsWith("a"))
  .map((element) => "b" + element + "c");
