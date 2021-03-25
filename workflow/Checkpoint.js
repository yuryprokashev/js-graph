const {Node} = require("js-graph");

module.exports = function Checkpoint(id, transitionFilter){
    Node.call(this, id);
    this.pickTransition = transitionFilter;
}