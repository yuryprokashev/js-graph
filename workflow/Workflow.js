const {Graph} = require("js-graph");

module.exports = function Workflow(checkpoints, transitions){
    const _graph = new Graph(checkpoints, transitions);
    this.getCheckpoint = function (checkpointId){
        return _graph.getNode(checkpointId);
    };
    this.getNextTransition = function (wfState, checkpointId){
        const currentCheckpoint = _graph.getNode(checkpointId);
        const nextTransitionId = currentCheckpoint.pickTransition.call(null, wfState);
        if(!nextTransitionId) return;
        const nextTransitions = _graph.getOutgoingEdges(checkpointId).filter(function(transition){
            return transition.getId() === nextTransitionId;
        });
        return nextTransitions[0];
    };
}