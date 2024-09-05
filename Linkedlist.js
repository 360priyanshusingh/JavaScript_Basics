class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{

     constructor(){
       this.head=null;
     }

     append(element){
        const newNode=new node(element)
         
        if(this.head===null){
            this.head=newNode;
            return;
        }

        let currentNode=this.head;

        while(currentNode.next!=null){
            currentNode=currentNode.next;
        }
        currentNode.next=newNode;
        return
     }
     preAppend(element){
        let newNode=new node(element);
        newNode.next=this.head;
        this.head=newNode;
     }

     delete(element){

        if(this.head===null) return "LinkedList is empty";

        if(this.head.data==element){
            this.head=this.head.next;
            return ;
        }
         
        let privious=null;
        let currentNode=this.head;
        while(currentNode!=null && currentNode.data!=element){
            privious=currentNode;
            currentNode=currentNode.next;
        }
        
        if(currentNode===null) return "Element is not present !";

        privious.next=currentNode.next;

     }


    printLn(){
        let currentNode=this.head;

        while(currentNode!=null){
            console.log(currentNode.data)
            currentNode=currentNode.next;
        }


    }

}


let mylist=new LinkedList()
mylist.append(1)
mylist.append(2);
mylist.append(3);
mylist.append(4);
mylist.printLn();
mylist.delete(2)

mylist.preAppend(5);
console.log(mylist)
mylist.printLn()