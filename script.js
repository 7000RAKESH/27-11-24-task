// task1
// let person = {
//   name: "ganesh",
//   sayHello: function () {
//     console.log(` Hello ${this.name} `);
//   },
// };
// person.sayHello();
// let person2 = {
//   name: "rakesh",
// };

// person.sayHello.call(person2);

// task2
// let calculator = {
//   value: 10,
//   add: function () {
//     console.log(this.value + 5);
//   },
//   sub: function () {
//     console.log(this.value - 5);
//   },
// };
// calculator.add();
// calculator.sub();

// task3
// let but1 = document.querySelector(".but1");

// but1.addEventListener("click", () => {
//   let obj = {
//     name: "rakesh",
//     yes: function () {
//       console.log(this.name);
//     },
//     no: () => {
//       console.log(this.name);
//     },
//   };
//   obj.yes();
//   obj.no();
// });

// task 4
// let car = {
//   name: "AUDI",
//   startEngine: function () {
//     console.log(`Start the engine of ${this.name}`);
//   },
// };
// let bike = {
//   name: "Kawasaki Ninja",
// };
// car.startEngine();
// car.startEngine.call(bike);

// task 5

// let mathOPerators = {
//   sum: function (a, b) {
//     console.log(a + b);
//   },
// };
// mathOPerators.sum.apply({}, [5, 10]);

// task 6
// let counter = {
//   count: 0,
//   increment: function () {
//     this.count++;
//     console.log(this.count);
//   },
// };
// let fun = counter.increment.bind(counter);
// fun();

// task 7
// let timer = {
//   name: "rakesh",
//   start: function () {
//     setTimeout(() => {
//       console.log(` Timer ${this.name} is started`);
//     }, 2000);
//   },
// };
// // timer.start();
// let fun = timer.start.bind(timer);
// fun();

// task 8
// let rectangle = {
//   lenght: 100,
//   width: 30,
// };
// let circle = {
//   radius: 10,
//   pi: 3.14,
// };
// function areaOfRectangle(l, a) {
//   console.log(l * a);
// }
// function areaOfCircle(pi, r) {
//   console.log(pi * r ** 2);
// }
// areaOfRectangle(rectangle.lenght, rectangle.width);
// areaOfCircle(circle.pi, circle.radius);
