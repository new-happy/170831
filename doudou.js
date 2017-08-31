// class Dog {
//   constructor (name) {
//     this.name = name
//   }
//   sayHello () {
//     console.log(this.name)
//   }
// }
//
// let doudou = new Dog('doudou')
// let feifei = new Dog('feifei')
// doudou.sayHello()
// feifei.sayHello()


//类的继承
// class Person {
//   sayKing () {
//     console.log('human');
//   }
// }
// class Man extends Person {
//   sayGender () {
//     console.log('male');
//   }
// }
// class Women extends Person {
//   sayGender () {
//     console.log('Female');
//   }
// }
//
// const peter = new Men
// const billie = new Women
// peter.sayKing()
// billie.sayKing()
//extends英文意思是拓展这里指的是 继承
// import IP from './ext.js'
// console.log(IP);
// 变量的解构赋值
// const [name,qq,weixin] = ['happy','309615655','shen309615655']
// console.log(name);
// console.log(qq);
// console.log(weixin);
// 字符串的扩展
// const name = 'happy'
// const ind = `my is ${name}`
// console.log(ind);
// 函数扩展 箭头函数
// 函数：
// const myFun =function (name) {
//   console.log(name);
// }
// myFun('happy')
// 只有一种参数的时候可以写成
// const myFun =name) => {
//   console.log(name);
// }
// myFun('happy')
// 若函数中只有一个语句切返回最终结果可写成
const myFun = name => name + name
console.log(myFun('happy'));
