const Edge = require("../Edge");

module.exports = function (){
    QUnit.module("edge", {
        before: function (){
            this.edge = new Edge("edge-1", "node-1", "node-2", 100);
        }
    });
    QUnit.test("Can provide id", function (assert){
        assert.strictEqual(this.edge.getId(), "edge-1");
    });
    QUnit.test("Can provide start node id", function (assert){
        assert.strictEqual(this.edge.getStartNodeId(), "node-1");
    });
    QUnit.test("Can provide end node id", function (assert){
        assert.strictEqual(this.edge.getEndNodeId(), "node-2");
    });
    QUnit.test("Can provide cost", function (assert){
        assert.strictEqual(this.edge.getCost(), 100);
    });
}