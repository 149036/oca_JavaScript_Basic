info = { id: 0, name: "My Name", own_car: true };
info.id;
info.name;
info["name"];
info.id = 3;
info.id;
info["id"] = 5;
info.id;
info.own_car = false;
info.age = 19;
info;
"age" in info;
"ageqwe" in info;
delete info.age;
info;

obj1 = { id: 1, name: "my name" };
obj2 = { age: 200, obj: "obj" };
new_obj = { ...obj1, ...obj2 };
new_obj2 = [{ ...obj1, ...obj2 }];
