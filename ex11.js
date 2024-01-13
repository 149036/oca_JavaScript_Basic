class MyClass {
  constructor() {}
  consolelog() {
    console.log("consolelog");
  }
}

myClass = new MyClass();
myClass.consolelog();

let my_class = {
  consolelog() {
    console.log("consolelog");
  },
};
my_class.consolelog();

my_class.a = () => {};
my_class.a();
my_class.a = () => {
  console.log("a");
};
my_class.a();

my_class;
my_class.b = function () {};
my_class;
