const gen = function* () {
  return yield new Promise.all([yield 1, yield 2, yield 3]);
};

const promise_gen = gen();

promise_gen.next();
promise_gen.next();
promise_gen.next();
promise_gen.next();
