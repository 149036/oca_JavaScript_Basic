class MyClass {
  constructor() {}
  consolelog() {
    console.log("consolelog");
  }
}
my_obj = {}
my_obj = new MyClass;
my_obj
my_obj.consolelog();
my_obj.__proto__ === MyClass.prototype

const temp = {}
temp.__proto__
temp.__proto__ = MyClass.prototype
temp.consolelog();