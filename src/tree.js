var makeTree = function(){
  var newTree = Object.create(treeMethods);
  newTree.value = undefined;
  newTree.children = [];
  newTree.count = 0;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  node = {};
  node.newValue = value;
  this[this.count] = node;
  this.children.push(node);
  this.count++;
};

treeMethods.contains = function(value){
  var checker = false;
  for(var node in this){
    for(var key in node){
      if(node[key] == value){
        checker = true;
      }
    }
  }
  return checker;
};
