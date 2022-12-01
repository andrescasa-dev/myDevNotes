class Graph {
  numOfNodes = 0;
  adjacentList = {}
  addNode(node){
    this.adjacentList[node] = []
    this.numOfNodes++
    return this
  }
  addEdge(nodeA, nodeB){
    this.adjacentList[nodeA].push(nodeB)
    this.adjacentList[nodeB].push(nodeA)
    return this
  }

  deleteNode(node){
    this.adjacentList[node].forEach(relatedNode =>{
      const updatedEdges = this.adjacentList[relatedNode].filter(edge => edge !== node)
      this.adjacentList[relatedNode] = updatedEdges
    })
    delete this.adjacentList[node];
  }

  showConnections(){
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
  }
}

const nodes = [0,1,2,3,4,5,6];
const edgesList = [[0,1],[0,2],[1,2],[1,3],[3,4],[2,4],[4,5],[5,6]]

const myGraph = new Graph();
nodes.forEach(node => myGraph.addNode(node))
edgesList.forEach(edge => myGraph.addEdge(...edge))
myGraph.deleteNode(3)
myGraph.showConnections();