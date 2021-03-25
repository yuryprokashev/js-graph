module.exports = function Graph(nodes, edges){
    const nodeMap = nodes.reduce(function(acc, node){
        acc.set(node.getId(), node);
        return acc;
    }, new Map());
    const outgoingEdgeMap = edges.reduce(function(acc, edge){
        if(!edge.getStartNodeId()) return acc;
        if(!acc.get(edge.getStartNodeId())) acc.set(edge.getStartNodeId(), []);
        acc.get(edge.getStartNodeId()).push(edge);
        return acc;
    }, new Map());
    const incomingEdgeMap = edges.reduce(function(acc, edge){
        if(!edge.getEndNodeId()) return acc;
        if(!acc.get(edge.getEndNodeId())) acc.set(edge.getEndNodeId(), []);
        acc.get(edge.getEndNodeId()).push(edge);
        return acc;
    }, new Map());
    const edgeMap = edges.reduce(function(acc, edge){
        acc.set(edge.getId(), edge);
        return acc;
    }, new Map())
    this.getNode = function(nodeId){
        return nodeMap.get(nodeId);
    };
    this.getOutgoingEdges = function(nodeId){
        return outgoingEdgeMap.get(nodeId);
    };
    this.getIncomingEdges = function (nodeId){
        return incomingEdgeMap.get(nodeId);
    };
}