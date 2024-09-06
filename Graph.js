class Graph{
    constructor(){
        this.adjacanyList={}
    }

    addVertex(vertex){
        if(!this.adjacanyList[vertex]){
            this.adjacanyList[vertex]=[];
        }
    }

    addEdge(vertex1,vertex2){
        this.adjacanyList[vertex1].push(vertex2);
        this.adjacanyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacanyList[vertex1]=this.adjacanyList[vertex1].filter((val)=>{
          return val!=vertex2;
        })
        this.adjacanyList[vertex2]=this.adjacanyList[vertex1].filter((val)=>{
          return val!=vertex1;
        })
       
    }

    printBFS(start){
        let queue=[start];
        let result=[];
        let visited={};
        visited[start]=true;

        while(queue.length){
             let front=queue.shift();
             result.push(front);
            //  for(let i=0;i<this.adjacanyList[front].length;i++){
            //     if(!visited[this.adjacanyList[front][i]] ){
            //                 visited[this.adjacanyList[front][i]]=true;
            //                 queue.push(this.adjacanyList[front][i]);
            //             }
               
            //  }
         
             this.adjacanyList[front].forEach((element)=>{
                if(!visited[element] ){
                    visited[element]=true;
                    queue.push(element);
                }
             })

           

        }
        return result;
    }

}

let graph= new Graph();
graph.addVertex("1")
graph.addVertex("2")
graph.addVertex("3")
graph.addEdge("1","2")
graph.addEdge("2","3")
// graph.removeEdge("2","3")
let ans=graph.printBFS("2")
console.log(ans)