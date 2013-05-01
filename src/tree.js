var makeTree = function(){
  var newTree = Object.create(treeMethods);
  newTree.value = undefined;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // Create a new node with the passed value
  var node = makeTree();
  node.value = value;
  node.parent = this;

  // Add it as a child of the current tree
  this.children.push(node);

  // Return our new tree so we can do stuff with it
  return node;
};

treeMethods.contains = function(value){
  //if i contain the value return true
  // or return whether any child contains value
  // if no children return false
  if(this.value == value){
    return true;
  } else {
    for(var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(value)){
        return true;
      }
    }
  }
  return false;
};
