// class Queue{
//     constructor(){
//         this.Array=[] 
//     }

//     push(element){
//        this.Array.push(element) ;
//     }

//     is_Empty(){
//         return this.Array.length==0 ?  true :false ;
//     }

//     front(){
//         if(this.is_Empty()!=true){
//             return this.Array[0];
//         }
//         else{
//             return "Sorry Queue is Empty !";
//         }
//     }

//     pop(){
//         if(this.is_Empty()!=true){
//             return this.Array.shift();
//         }
//         else{
//             return "Sorry Queue is Empty !";
//         }
//     }

// }

// const myQueue=new Queue();

// myQueue.push(1)
// myQueue.push(2)

// myQueue.push(3)
// myQueue.push(4);

// console.log(myQueue.front());
// console.log(myQueue.pop());
// console.log(myQueue.front())

// 2 inbuild Queue :-
let Queue=[];
Queue.push(1);
Queue.push(2);
Queue.push(3);

console.log(Queue);
const front= Queue.length!=0 ? Queue[0]   : "Sorry Queue is Empty" ;

console.log(front);

const popElement=Queue.shift();
console.log(popElement);
console.log(Queue);
console.log(Queue);