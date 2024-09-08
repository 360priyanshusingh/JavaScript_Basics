// 1 QuickSort :-

// function partition(Array,start,end){
//       let highEle=Array[start];
//       let count=0;
//       for(let i=start+1;i<=end;i++){
//           if(Array[i]<highEle){
//             count++;
//           }
         
//       }
//       let i=start;
//       let j=end;
//       let provtIndex=start+count;
//       [Array[start],Array[provtIndex]]=[Array[provtIndex],Array[start]];
      


//       while(i<provtIndex && j>provtIndex ){
       
//          if(Array[i]<Array[provtIndex]){
//             i++;
//          }

//         else if (Array[j] > Array[provtIndex]){
//            j--;
//          }


//         else if(i<provtIndex && j>provtIndex ) {
//             [Array[i],Array[j]]=[Array[j],Array[i]];
//             i++;j--;
//          }


//       }
      
//       // console.log(Array)

//       return provtIndex;
// }


// function quicksort(Array,start,end){
//     if(start>=end){
//      return;
//     }
    
//     let mid=partition(Array,start,end);
//     quicksort(Array,start,mid);
//     quicksort(Array,mid+1,end); 

// }
// let Arry=[8,1,9,2,3,4,5,8];
// quicksort(Arry,0,Arry.length-1);
// console.log(Arry);

// 2 : Selection Sort :-

// function SelectionSort(Array){
//      let size=Array.length;

//     for(let i=0;i<size;i++){
//       for(let j=i+1;j<size;j++){
//         if(Array[i] > Array[j] ){
//           [Array[i],Array[j]]=[Array[j],Array[i]];
//         }
//       }
//     }
// }
// let Array=[8,9,1,3,4,2,5,6,3];
// SelectionSort(Array);
// console.log(Array);

// 3 InsertionSort :-
//  function InsertionSort(Array){
//   let size=Array.length;

//   for(let i=1;i<size;i++){
//     let key=Array[i];
//     let j=i-1;

//     while(j>=0 && Array[j]>key){
//       Array[j+1]=Array[j]
//       j--;
//     }
//     Array[j+1]=key;
    

//   }

//  }


//  let Array=[8,9,1,2,4,5,9,3]
//  InsertionSort(Array);
//  console.log(Array)

// 4 BubbleSort :-
// function BubbleSort(Array){
//      let size=Array.length

//     for(let i=0;i<size;i++){
//       let Swapped=false;

//       for(let j=0; j<size-i-1; j++){
//         if(Array[j]>Array[j+1]){
//           [Array[j],Array[j+1]]=[Array[j+1],Array[j]]
//           Swapped=true;
//         }
         
//       }

//       if(Swapped==false)
//          return;
//     }
// }



//  let Array=[8,9,1,2,4,5,9,3]
//  BubbleSort(Array);
//  console.log(Array)

// 5 MerageSort :-
function merge(Array,start,mid,end){
    let New_Array=[];
    let i=start;
    let j=mid+1;

    while(i<=mid && j<=end){
        
      if(Array[i]<Array[j]){
        New_Array.push(Array[i]); 
        i++;
      }
      else if(Array[i]>Array[j]){
        New_Array.push(Array[j]); 
        j++;
      }
      else{
        New_Array.push(Array[i]);  New_Array.push(Array[j]);  i++;j++;
      }
    }

    while(i<=mid){
      New_Array.push(Array[i]); 
      i++;
    }
    while(j<=end){
      New_Array.push(Array[j]); 
      j++;
    }


    for(let i=0;i<New_Array.length;i++){
        Array[i+start]=New_Array[i];
    }


}

function MerageSort(Array,start,end){
     if(start>=end) return
     
     let mid=Math.floor((start+end)/2);
     MerageSort(Array,start,mid);
     MerageSort(Array,mid+1,end);
     merge(Array,start,mid,end);

}


 let Array=[8,9,1,2,4,5,9,3,2,2]
 MerageSort(Array,0,Array.length-1);
 console.log(Array)


