//  1 call() :-It can be used to invoke (call) a method with an owner object as an argument (parameter).
// 1 example:-
//  function Name(print_Number){
//     for(let i=0;i<print_Number;i++)
//        console.log(`Hii ${this.fname} ${this.lname} your age is ${this.age}`)
//  }

//  let Person={
//     fname:"Priyanshu",
//     lname:"Sisodiya",
//     age:"26"
//  }
// Name.call(Person,3)

// 2 example :-
// const person = {
//     fullName: function(city, country,greating) {
//       return greating + " your name is  " +this.firstName + " " + this.lastName + " from " + city + "," + country;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   let ans=person.fullName.call(person1, "Oslo", "Norway","Hii");
//   console.log(ans);


// 2 apply :- The apply() method is similar to the call() method (previous chapter).
// 1 example :-

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
// const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
//  console.log(person.fullName.apply(person1)) ;

// 2 example :-
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   person.fullName.apply(person1, ["Oslo", "Norway"]);

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

//3 bind() : -It does not call the function immediately. Instead,
//  it returns a new function that you can call later.

// 1 example :-
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//         // console.log(this.firstName + " " + this.lastName);

//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
//   const member2 = {
//     firstName:"Hege2",
//     lastName: "Nilsen2",
//   }
//   let fullName = person.fullName.bind(member);
//   let fullName2 = person.fullName.bind(member2);
//   console.log(fullName());
//   console.log(fullName2());


// 4 closure :-A closure in JavaScript is when a function remembers and can access variables from its surrounding
//  environment, even after that environment has finished executing.
// 1 example :-
// function createGreeting(name) {
//     return function() {
//         console.log('Hello, ' + name);
//     };
// }

// const greetJohn = createGreeting('John');
// greetJohn();

// 2 example :-
// function outerFunction() {
//     let outerVariable = 'Hello';
//     let counter=0;
//     function innerFunction() {
//         counter++
//         console.log(outerVariable,counter);  // Uses the outerVariable from outerFunction
//     }
//     return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure();
// myClosure();
// myClosure();

// 3 example :-
// function scretHolder(){
//     let scret="You are my girlfrind";
//     return {
//         setScret: function(msg){
//             scret=msg;
//         },
//         getScret:function(){
//             return scret;
//         }
//     }
// }

// let myClosure2=scretHolder();
// console.log(myClosure2.getScret());
// myClosure2.setScret('No your Not My  grilfrind');
// console.log(myClosure2.getScret());
// console.log(myClosure2.getScret());


