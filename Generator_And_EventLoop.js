// 1 JavaScript Function Generator :- A generator in JavaScript is a special type of function that can pause and resume its execution. Unlike regular functions that run from start to finish once they're called, generators can return multiple values, one at a time, as the function runs. 
// This is useful when you want to generate a sequence of values lazily, meaning only when they’re needed.
// 1 example :-
//  function * countNumber(){

//     console.log("This is 1 Generator ")
//     yield 1;
//     console.log("This is 2 Generator ")
//     yield 2;
//     console.log("This is 3 Generator ")
//     yield 3;
//     console.log("This is 4 Generator ")
//     yield 4;
//  }
// const ans=countNumber();
//  console.log(ans.next().value)
//  console.log(ans.next().value)

//2 example :-
function* objectEntries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}
const obj = { name: 'Alice', age: 25, city: 'New York' };
const genObj = objectEntries(obj);
console.log(genObj.next().value); 
console.log(genObj.next().value); 
// console.log(genObj.next().value);


//  2 event loop :-
// example:-
// console.log("Before delay");
// function delayBySeconds(sec) {
//    let start = now = Date.now()
//    while(now-start < (sec*1000)) {
//      now = Date.now();
//    }
// }
// delayBySeconds(5);
// console.log("After delay"); 