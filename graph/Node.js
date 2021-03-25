module.exports = function Node(id){
    this.getId = function(){
        return id;
    };
    this.toJSON = function (){
        return {
            id: id
        };
    }
}