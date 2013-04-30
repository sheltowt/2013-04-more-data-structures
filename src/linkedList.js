// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;
  var count = 0;
  var first = 0;

  newLinkedList.addToTail = function(value){
    newLinkedList[count] = value;
    count ++;
  };

  newLinkedList.removeHead = function(){
    var returnValue = newLinkedList[first];
    delete newLinkedList[first];
    first ++;
    return returnValue;
  };

  newLinkedList.contains = function(value){
    var checker = false;
    for(var key in newLinkedList){
      if(newLinkedList[key] == value){
        checker = true;
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
