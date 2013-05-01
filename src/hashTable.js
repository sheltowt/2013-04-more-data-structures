var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var currentIndex = this._storage.get(index);
  if(!currentIndex){
    currentIndex = [];
  }
  var newTuple = [key, value];
  currentIndex.push(newTuple);
  this._storage.set(index, currentIndex);
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var desiredValue = this._storage.get(index);
  if(desiredValue[0] === undefined){
    return "This value does not exist!";
  }
  for(var i = 0; i < desiredValue.length; i++){
    if(desiredValue[i][0] == key){
      return desiredValue[i][1];
    }
  }
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var initialArray = this._storage.get(index);
  console.log(initialArray);
  if(!initialArray){
    return "This value does not exist!";
  }
  for(var i = 0; i < initialArray.length; i++){
    if(initialArray[i][0] == key){
      initialArray.splice(i,1);
      this._storage.set(index, initialArray);
      console.log(initialArray);
      break;
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you