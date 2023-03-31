(() => {
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    run(distance: number = 0) {
      console.log(`${this.name}跑了${distance}米这么远`);
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name)
    }
    run(distance: number = 5): void {
      console.log(`${this.name}跑了${distance}米这么远`);
    }
  }

  class Pig extends Animal {
    constructor(name: string) {
      super(name)
    }
    run(distance: number = 10): void {
      console.log(`${this.name}跑了${distance}米这么远`);
    }
  }

  const animal: Animal = new Animal('动物')
  animal.run(500)

  const dog: Dog = new Dog('大黄')
  dog.run()

  const pig: Pig = new Pig('八戒')
  pig.run()

  console.log('===================');
  
  const dog1: Animal = new Dog('小黄')
  const pig1: Animal = new Pig('佩奇')
  dog1.run()
  pig1.run()

  console.log("===============");
  
  function showRun(ani: Animal) {
    ani.run()
  }
  showRun(dog1)
  showRun(pig1)
})()