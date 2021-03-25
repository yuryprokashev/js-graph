const {Checkpoint, Transition, Workflow} = require("../main");
const {WorkflowState} = require("../main");

module.exports = function(){
    QUnit.module("workflow", {
        before: function(){
            const checkpoints = [
                new Checkpoint("start", function(wfState){return "t1"}),
                new Checkpoint("node-1", function(wfState){
                    return wfState.request.number === 2 ?  "t2" : "t3";
                }),
                new Checkpoint("end", function (wfState){return null})
            ];
            const transitions = [
                new Transition("t1", "start", "node-1", function (wfState){
                    console.log("T1: " + JSON.stringify(wfState));
                    return wfState;
                }),
                new Transition("t2", "node-1", "end", function (wfState){
                    console.log("T2: " + JSON.stringify(wfState));
                    return wfState;
                }),
                new Transition("t3", "node-1", "end", function (wfState){
                    console.log("T3: " + JSON.stringify(wfState));
                    return wfState;
                }),
            ];
            this.workflow = new Workflow(checkpoints, transitions);
        }
    });
    QUnit.test("Can get checkpoint by id", function (assert){
        const checkpoint = this.workflow.getCheckpoint("node-1");
        assert.strictEqual(checkpoint.getId(), "node-1");
    });
    QUnit.test("Can get next transition based on state", function (assert){
        const stateT2 = new WorkflowState({number: 2});
        const stateT3 = new WorkflowState({number: 3});
        const nextT2 = this.workflow.getNextTransition(stateT2, "node-1");
        const nextT3 = this.workflow.getNextTransition(stateT3, "node-1");
        assert.strictEqual(nextT2.getId(), "t2");
        assert.strictEqual(nextT3.getId(), "t3");
    });
}