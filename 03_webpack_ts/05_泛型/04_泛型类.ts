(() => {
  class Generator<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }

  const gen1: Generator<number> = new Generator<number>()
  gen1.zeroValue = 10
  gen1.add = function (x, y) {
    return x + y
  }
  console.log(gen1.add(gen1.zeroValue, 20));

  const gen2: Generator<string> = new Generator<string>()
  gen2.zeroValue = 'Bread'
  gen2.add = function (x, y) {
    return x + y
  }
  console.log(gen2.add(gen2.zeroValue, 'Lee'));
})()