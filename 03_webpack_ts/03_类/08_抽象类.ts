(() => {
abstract class Animal {
  abstract bark():any
  run() {
    console.log('小狗跑');
  }
}
class Dog extends Animal {
  bark() {
    console.log('汪汪汪');
  }
}
var dog:Dog = new Dog()
dog.bark()
dog.run()
})()