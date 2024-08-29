
// normal function  :-

// function print(){
//     console.log("Priyanshu Sisodiya DDDDD");
 
// }
// print();


// Arrow Function :-

// let sum=(a,b)=>{
//     console.log(a,b);
// }

// let ans=sum(2,5);

// console.log(ans);

// let sum2=()=>{
//     return 0;
// }

// let ans2=sum2(2,5);

// console.log(ans2);
// call back fuction :-

let Array=[1,2,3,4,5,6,7];




// higher order Fuction :- 
// there are two types of higher Order fuction

//fuction as a Argumment :-

function higherOrderfuction(callback){
    callback();
}
function callbackfuction(x){
    console.log("Call Back Fuction Called !",x);
}
higherOrderfuction(callbackfuction);

//fuction as retuen value:-

// function multipiler(factor){
       
//     return  function (x)  {
//           return x*factor;
//     };
// }
// let double=multipiler(5);
// console.log(double(2));
// console.log(double(3));












    






