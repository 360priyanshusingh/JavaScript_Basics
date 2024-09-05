// stack :-
// example

// class Stack{
//     constructor(){
//         this.Array=[];
//     }

//     push(element){
//         this.Array.push(element);
//     }

//     size(){
//         return this.Array.length;
//     }

//     is_Empty(){
//          return this.Array.length==0 ? true : false;
//     }

//     peek(){
//         if(this.Array.length!=0){
//             return this.Array[this.Array.length-1];
//         }
//         else{
//             return "There is no element in the stack";
//         }
//     }

//     pop(){
//         if(this.is_Empty()==false){
//             return this.Array.pop();
//         }
//         else{
//             return "There is no elemet in the stack"
//         }
//     }
// }

// const myStack= new Stack();
// myStack.push(1)
// // myStack.push(3)
// // myStack.push(4)
// // myStack.push(15)
// // myStack.push(16)
// myStack.pop();
// console.log(myStack.peek())
// console.log(myStack.is_Empty())
// const iterator=myStack.entrious()

// inbuild Stack 

let stack=[];
stack.push(1)
stack.push(2)
stack.push(3)
const popElement = stack.pop()
console.log(popElement);
console.log(stack);

const peek=stack[stack.length-1];
console.log(peek);

const is_Empty= stack.length==0 ? true :false;
console.log(is_Empty)

const stackSize=stack.length;
console.log(stackSize);
