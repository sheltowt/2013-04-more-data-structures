var HashTable = function(){
  this._limit = 8;
  this.count = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(value){
  var index = getIndexBelowMaxForKey(this._limit, value);
  this.limitedArray(index,value);
  this.set(index,value);
  count ++;
};

HashTable.prototype.retrieve = function(index){
  return this.get(this[index]);
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you