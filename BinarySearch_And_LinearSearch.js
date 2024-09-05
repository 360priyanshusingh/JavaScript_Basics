// BinarySearch :-
function BinarySearch(Array,target){
    let size=Array.length;
    let start=0;
    let end=size-1;
    while(start<=end){
        let mid=(start+end)/2;
        if(target==Array[mid]){
           return mid;
        }
        else if(target<Array[mid]){
          end=mid-1;
        }
        else{
           start=mid+1
        }
    }

}


//  LinearSearch

function LinearSearch(Array,target){

    // Array.forEach((val,index)=>{
    //     console.log(val,index)
    //      if(val==target){
    //         return index;
    //      }
    // })
    
    for(let i=0;i<Array.length;i++){
        if(Array[i]==target){
            return i;
        }
    }

    // for([val] in Array){
    //     if(val==target){
    //         return index
    //     }
    // }

}

let Arrry=[1,2,3,4,5,6,7]
let index=BinarySearch(Arrry,7);
let index2=LinearSearch(Arrry,4)
console.log(index);
console.log(index2);

