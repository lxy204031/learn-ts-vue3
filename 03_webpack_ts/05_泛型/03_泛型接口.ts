(() => {
  interface IbaseCRUD<T> {
    data: T[],
    add: (t: T) => void
    getById: (id: number) => T
  }
  class User {
    id?: number;
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }
  class UserCRUD implements IbaseCRUD<User> {
    data: User[] = []
    add(user: User): void {
      user = { ...user, id: Date.now() }
      this.data.push(user)
      console.log("添加成功！", user);
    }
    getById(id: number): User {
      return this.data.find(item => item.id == id)
    }
  }

  const user1 = new User('Tom', 12)
  const user2 = new User('Jerry', 10)
  const userCRUD1 = new UserCRUD()
  userCRUD1.add(user1)
  userCRUD1.add(user2)
})()