class A {
  name
  constructor(name){
    this.name = name
  }
  
}

class B {
  name
  age
  constructor(age){
    this.name = new A('aaa').name
    this.age = age
  }
}

const aa = new A(2)
console.log(aa.name);