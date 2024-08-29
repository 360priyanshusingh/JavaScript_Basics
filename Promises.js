// Promise :- 
//          

// const mypromise=new Promise((resolve,reject)=>{
//     console.log("Promice Fuction is called");
//     // resolve("Solved")
//     // let ans;
//     reject("Rejected");

// })

// mypromise.then((res)=>{
//     console.log("Promise Succesfully Accepted : ",res);
// })
// .catch((err)=>{
//    console.log("Promise Not Succesfully Accepted : ", err)
// })


// async and await fuction : -

 function getdata(num){
    
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            console.log("this is the first data : ",num)
        }, 2000*num)

            resolve("Resolve");
            // reject("Your Promise is rejected");
    })
}

async function data(){
    await getdata(1)
    await getdata(2)
    await getdata(3)
}
getdata(4)

data()


// let data =getdata();

// data.then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



