(() => {
  interface IFly {
    fly():any
  }
  class Person implements IFly {
    fly() {
      console.log('人不会飞');
    }
  }
  const person = new Person()
  person.fly()


  interface ISwim {
    swin():any
  }
  class Person2 implements IFly, ISwim {
    fly() {
      console.log('我会飞啦');
    }
    swin() {
      console.log("我会游泳啦");
    }
  }
  const person2 = new Person2()
  person2.fly()
  person2.swin()


  interface ISwinFly extends IFly, ISwim {}
  class Person3 implements ISwinFly {
    fly() {
      console.log('我会飞');
    }
    swin() {
      console.log("我会游");
    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swin()
})()