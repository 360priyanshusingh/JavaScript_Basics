// 1 BinaryTrees:-
// class Node{
//     constructor(data){
//         this.data=data;
//         this.left=null;
//         this.right=null;
//     }
// }

// let  root= new Node(5);
// let  left= new Node(4);
// let  right= new Node(7);

// root.left=left;
// root.right=right;
// left.left= new Node (1)
// left.right= new Node (2)
// right.left= new Node(6)
// right.right= new Node(8)

// function print(newRoot){

//     if(newRoot==null){
//      return ;
//     }
//     console.log(newRoot.data);
//     print(newRoot.left)
//     print(newRoot.right)
// }

// function search(newRoot2,data){
//     if(newRoot2==null){
//         return false ;
//        }

//     if(newRoot2.data==data){
//         return true;
//     }

//     return search(newRoot2.left,data) || search(newRoot2.right,data)
    
// }

// // print(root);
// console.log(search(root,10));

// 2 Generic Tree :-

class GenericTrees{
    constructor(data){
        this.data=data;
        this.childrens=[];
    }
}
let root= new GenericTrees(10);
let node1= new GenericTrees(1);
let node2= new GenericTrees(2);
let node3= new GenericTrees(3);
let node4= new GenericTrees(4);
root.childrens.push(node1)
root.childrens.push(node2)
node1.childrens.push(node3)
node1.childrens.push(node4)

function printGt(newNode){
    if(newNode==null) return
    console.log(newNode.data)

    if(newNode.childrens.length==0){
        return;
    }
  
    for(let i=0;i<newNode.childrens.length;i++){
        printGt(newNode.childrens[i]);
    }
  

}

printGt(root)
