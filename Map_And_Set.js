let myMap =new Map()
myMap.set("Priyanshu",1)
myMap.set("Priyanshu",2)
myMap.set("Sisodiya",2)
myMap.set("Bhopal",3)
myMap.set("Indor",4)
myMap.set("Bhai esha mt kr yrr",4)
// console.log(myMap);
// console.log(myMap.has("Priyanshu"))
// console.log(myMap.get('Sisodiya'))
myMap.forEach((val,key)=>{
    console.log(val,key);
})
// let itrator2 = myMap.entries()
// for (const [key,val] of itrator2) {
//     console.log(key,val)
    
// }

let mySet= new Set();
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(4)
mySet.add(4)
mySet.add(4)
console.log(mySet);
// let itrator=mySet.entries();
// for(val of itrator){
//     console.log(val)
// }
mySet.forEach((val)=>{
    console.log(val)
    console.log(val)
})