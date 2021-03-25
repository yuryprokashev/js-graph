const Node = require("../Node.js");
module.exports = function(){
    QUnit.module("Node", {
        before: function (){
            this.node = new Node("one");
        }
    });

    QUnit.test("Can provide id", function(assert){
        assert.strictEqual(this.node.getId(), "one");
    });
}