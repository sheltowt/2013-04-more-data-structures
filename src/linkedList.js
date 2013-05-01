// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = 0;
  newLinkedList.tail = 0;

  newLinkedList.addToTail = function(value){
    var node = makeNode(value);
    node.next = newLinkedList.tail + 1;
    newLinkedList[newLinkedList.tail] = node;
    newLinkedList.tail ++;
  };

  newLinkedList.removeHead = function(){
    var returnValue = newLinkedList[newLinkedList.head];
    delete newLinkedList[newLinkedList.head];
    newLinkedList.head ++;
    return returnValue;
  };

  newLinkedList.contains = function(checkvalue){
    var checker = false;
    for(var node in newLinkedList){
        if(newLinkedList[node].value == checkvalue){
          return true;
      }
    }
    return checker;
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
