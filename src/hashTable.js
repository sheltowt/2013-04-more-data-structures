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

HashTable.prototype.insert = function(value){
  var index = getIndexBelowMaxForKey(value, this._limit);
  this._storage.set(index, value);
};

HashTable.prototype.retrieve = function(index){
  var desiredValue = this._storage.get(index);
  return desiredValue;
};

HashTable.prototype.remove = function(index){
  

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you