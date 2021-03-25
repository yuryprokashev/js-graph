const {Edge} = require("js-graph");

module.exports = function Transition(id, startCheckpointId, endCheckpointId, wfAction){
    Edge.call(this, id, startCheckpointId, endCheckpointId);
    this.run = function(wfState){
        return wfAction(wfState);
    };
}