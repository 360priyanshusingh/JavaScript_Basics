
// method of Array :-

// 1 reduce :-
// example :
// let ans1=Array.reduce((v, r)=>{
//     return r+v;
// })
// console.log(ans1);

// 2 map :-
// example :
// let ans2=Array.map((val)=>{
//     return val*val;
// })
// console.log(ans2);

// 3 filter :-
// example :
// let ans3=Array.filter((val)=>{
//     return val!=2;
// })
// console.log(ans3);
  
// 4 toString ():-  it convert Array into String 
// example :
//  let str=Array.toString();
//  console.log(str);

// 5 length :- it give the length of the Array
// example :
// console.log(Array.length);

// 6 join() :- This join() method creates and returns a new string by concatenating all elements of an array. 
// It uses a specified separator between each element in the resulting string.
// example :
// let str=Array.join("Priyanshu");
// console.log(str);

// 7 delete oprater :- The delete operator is used to delete the given value which can be an object, array, or anything.
// example :
// let object={
//     firstName:"Priyanshu ",
//      lastName: "Sisodiya",
//      salary:"33000"
// }

// console.log(object);
// console.log(delete object.salary);
// console.log(delete object);
// console.log(object);

// 8  concat() :- The concat() method is used to concatenate two or more arrays and it gives the merged array.
// example:-

// let a1=["a","b","c"];
// let a2=["d","e"];
// let newA=Array.concat(a1,a2);
// console.log(newA);

// 9 flat() :- The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.
//Example
// const arr = [['1', '2'], ['3', '4', '5',['6'], '7']];
// const new2=arr.flat(0)
// console.log(new2);

// 10 push() :- The push() method is used to add an element at the end of an Array. As arrays in JavaScript are mutable objects,
//  we can easily add or remove elements from the Array. And it dynamically changes as we modify the elements from the array. 
// example :-
// let arr=[];
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// console.log(arr);

//  11 unshift()  :- it adding the element in front .
// example :-
// let arr=[];
// arr.push(1)
// arr.push(2)
// arr.unshift(3)
// arr.unshift(4)
// console.log(arr);

// 12 pop() :- it remove the last Element of the Array.
//example :-
// let arr=[1,2,3,4,5]
// arr.pop()
// console.log(arr)

// 13 shift() :- it remove the element from the beginning of the Array 
// example :-
// let arr=[1,2,3,4,5]
// arr.shift()
// console.log(arr)

// 14 splice() :- The splice() method is used to Insert and Remove elements in between the Array.
// example :-
// let arr=[1,2,3,4,5]
// arr.splice(1,1);
// arr.splice(1,0,6,6,6,6)
// console.log(arr);

// 15 slice() :- The slice() method returns a new array containing a portion of the original array,
//  based on the start and end index provided as arguments .
//example 
// let arr=[1,2,3,4,5];
// let a1=arr.slice(0,2);
// console.log(a1);

// 16 some() :-The some() method checks whether at least one of the elements of the array satisfies the condition checked
//  by the argument function.
// example :-
// function isGreaterThan5(element, index, array) {
//     return element > 10;
// }
// let array = [2, 5, 8, 1, 4];
// let value = array.some(isGreaterThan5);

// console.log(value);

// 17 reverse() :-The reverse() method is used to reverse the order of elements in an array.
//  It modifies the array in place and returns a reference to the same array with the reversed order.
//example :-
// let array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array);

// 18 values() :- The values() method returns a new Array Iterator object that contains the values for each index in the array.
// example:-
//  let arr=[1,2,3,4]
//  let Iterator=arr.values();
//  for(const val of Iterator){
//     console.log(val);
//  }

// 19 forEach():-

// let Array=[1,2,3,4,5,6] ;
// Array.forEach((val,index )=>{
//     console.log(val,index);
// });
// function print(num){
//   console.log(num);
// }
// Array.forEach(print);