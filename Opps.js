// 1 classes :-
// 1 example 
// class student {
//     constructor(firstname,lastname,roll){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.roll=roll;
//     }

//     print(){
//         console.log(`Your FirstName is  ${this.firstname} and LastName is ${this.lastname} and Your ${this.roll}`)
//     }
// }

// const obj1=new student("Priyanshu","Sisodiya",26)
// obj1.firstname="Divya"
// obj1.print();

// 2 example 
// class calculator{

//     add(a,b){
//         return a+b;
//     }

//     substarct(a,b){
//         return a-b;
//     }
    
//     multiplay(a,b){
//         return a*b;
//     }

//     devide(a,b){
//         return a/b;
//     }

// }

// const obj=new calculator;
// console.log(obj.add(2,5));
// console.log(obj.substarct(2,5));
// console.log(obj.multiplay(2,5));
// console.log(obj.devide(4,2));

// 2 inheritance :-
// example :-
// class Animal{
//     constructor (name,age){
//         this.name=name;
//         this.age=age;
//     }
//     speak(){
//         console.log(`${this.name} and ${this.age} make a noise`)
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log(`${this.name} and ${this.age} bark !`);
//     }
// }

// let obj = new Animal("Maglu",5)
// let obj2 = new Dog("tomy",10)
// obj.speak();
// obj2.speak();

// 2 example 
//  class Vehical{
//     constructor(type,wheels){
//         this.type=type;
//         this.wheels=wheels;
//     }

//     start(){
//       console.log(`${this.type} is starting with ${this.wheels} wheels`)
//     }

//  }

//  class Car extends Vehical{
//     constructor(make,model){
//          super("Car",4)
//          this.make=make;
//          this.model=model;
//     }
    
//     start(){
//         super.start() ;
//         console.log(`${this.make} ${this.model} is ready to go.`);

//     }
//  } 

// //  let obj=new Vehical("Car",4);
//  let obj1=new Car("Toyota","Coroll");
// //  obj.start();
//  obj1.start();

// 3 Polymorphism :-
// example:

// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
//     area() {
//         return 0; 
//     }
//     describe() {
//         console.log(`This is a ${this.name} with an area of ${this.area()}.`);
//     }
// }

// class Circle extends Shape{
//     constructor(radius){
//          super("Circle");
//          this.radius=radius;
//     }

//     area(){
//        return Math.PI * this.radius *this.radius;
//     }

// }

// class Rectangle extends Shape , Circle {
//     constructor(width, height) {
//         super("Rectangle");
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }
// }

// let obj=new Circle(2);
// let obj1=new Rectangle(4,5);

// obj.describe()
// obj1.describe()


// 4 Abstraction :-
// example of obstarct class :-
// class Animal {
//     constructor(name) {
//         if (this.constructor === Animal) {
//             throw new Error("Abstract classes cannot be instantiated.");
//         }
//         this.name = name;
//     }

//     speak() {
//      throw new Error("Speak must implimentation by exteds classes");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} says woof!`);
//     }
// }

// const myDog = new Dog("Rex");
// myDog.speak();

// 2 example :- 
// const Drawable={
    
//     drow(){
//         throw new Error("Method drow must be implimented");
//     }
//       ,
//     print(){
//         throw new Error("Method print must be implimented by you !");
//     }

// };

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     draw() {
//         console.log(`Drawing a circle with radius ${this.radius}`);
//     }
//     print() {
//         console.log(`Drawing a circle with radius ${this.radius}`);
//     }
// }

// function checkDrawable(obj) {
//     if (typeof obj.draw !== 'function' || typeof obj.print !== 'function') {
//         throw new Error("Object does not implement the Drawable interface correctly.");
//     }
// }

// let circle= new Circle(5);
// circle.draw();
// // circle.draw();
// checkDrawable(circle); 


// 5 Encapsulation :- 
// example :-
// class Person{
//     // Privet Modifers
//      #name="HELLO";
//     // Protected 
  
//      _age;
//     // public Modifiers 

//     constructor(name){
//      this.#name=name;
//     }

//     getName(){
//       return this.#name;
//     }

//     _getAge(){
//       return this._age;
//     }

//     setName(name){
//         this.#name=name; 
//     }
//     _setAge(age){
//         this._age=age; 
//     }
//     _setAge(age,name){
//         this._age=age; 
//         this.#name=name; 
//     }

// }

// let Object = new Person("Priyanshu2")

// Object.name="Divya"
// console.log(Object.getName());
// // Object._age=12;
// console.log(Object.age)
// // Object._setAge(24,"Hello");
// // console.log(Object.getName());
// // // Object.setName("Divya")
// console.log(Object._getAge());

class Vehicle { 
    constructor(_speed) { 
         
        this._speed = _speed; 
    } 
} 
  
class Car extends Vehicle { 
    constructor(speed) { 
        super(speed); 
    } 
    getSpeed() { 
        // Accessing the protected member in a subclas 
        return this.speed; s 
    } 
} 
  
const myCar = new Car(60); 
const myCar2 = new Vehicle(70); 
// Outputs: 60 
myCar2._speed=100;
console.log(myCar.getSpeed());


