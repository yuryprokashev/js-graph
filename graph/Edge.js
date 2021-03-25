module.exports = function Edge(id, startNodeId, endNodeId, cost){
    this.getId = function(){
        return id;
    };
    this.getStartNodeId = function(){
        return startNodeId;
    };
    this.getEndNodeId = function(){
        return endNodeId;
    };
    this.getCost = function (){
        return cost ? cost : 0;
    };
    this.toJSON = function(){
        return {
            id: id,
            startNodeId: startNodeId,
            endNodeId: endNodeId,
            cost: cost
        }
    }
}