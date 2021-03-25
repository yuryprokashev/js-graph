const {WorkflowState, Checkpoint} = require("../main");
module.exports = function (){
    QUnit.module("checkpoint", {
        before: function (){
            this.checkpoint = new Checkpoint("is-winner", function(wfState){
                if(wfState.request.operation === "sum") return "add-two";
                if(wfState.request.operation === "sub") return "subtract-two";
            });
        }
    });
    QUnit.test("Can pick transition id", function (assert){
        const state1 = new WorkflowState({operation: "sum"});
        const state2 = new WorkflowState({operation: "sub"});
        assert.strictEqual(this.checkpoint.pickTransition.call(null, state1), "add-two");
        assert.strictEqual(this.checkpoint.pickTransition.call(null, state2), "subtract-two");
    });
}