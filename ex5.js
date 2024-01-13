array1 = [1, 2, 3];
array1.pop();

array2 = ["abc", "def", "ghi"];
array2.pop();

array3 = [1, "a", 42];
array3.pop();

array4 = [...array1, ...array2, ...array3];
array4;
