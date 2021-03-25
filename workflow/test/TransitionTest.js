const {WorkflowState, Transition} = require("../main");
module.exports = function (){
    QUnit.module("transition", {
        before: function (){
            this.transition = new Transition("generate-number", "start", "end", function(wfState){
                const stateCopy = JSON.parse(JSON.stringify(wfState));
                stateCopy.context = {number: Math.ceil(Math.random() * 1000)};
                return stateCopy;
            });
        }
    });
    QUnit.test("Can run transition", function (assert){
        const state1 = new WorkflowState();
        const state1After = this.transition.run(state1)
        assert.strictEqual(state1After.context.number > 0, true);
    });
}