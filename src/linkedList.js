// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToHead = function(value){
    var node = makeNode(value);
    node.next = newLinkedList.head;
    newLinkedList.head = node;
  };

  newLinkedList.addToTail = function(value){
    var node = makeNode(value);
    if(newLinkedList.head){
      node.previous = newLinkedList.tail;
    }
    if(newLinkedList.tail){
      newLinkedList.tail.next = node;
    } else {
      newLinkedList.head =  node;
    }
    newLinkedList.tail = node;
  };

  newLinkedList.removeHead = function(){
    var returnValue = newLinkedList.head;
    newLinkedList.head = returnValue.next;
    return returnValue;
  };

  newLinkedList.removeTail = function(){
    var returnTail = newLinkedList.tail;
    newLinkedList.tail = returnTail.previous;
    return returnTail;
  };

  newLinkedList.contains = function(checkvalue){
    var firstNode = newLinkedList.head;
    // return newLinkedList.head.contains(checkvalue);

    var check = function(node){
      if(node.value === checkvalue){
        return true;
      } else if (node.next === null){
        return false;
      } else {
        return check(node.next);
      }
    };
    return check(firstNode);
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;
  newNode.previous = null;

  newNode.removeNextNode = function(){
  };

  newNode.contains = function(checkvalue) {

    // if self.value === checkvalue
    //  return true
    // else if self.next
    //  return self.next.contains(checkvalue)
    // else
    //  return false
  };

  return newNode;
};
