var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(string){
  var stringInStorage = false;
  for(var i =0; i < this._storage.length; i++){
    if(this._storage[i] == string){
      stringInStorage = true;
    }
  }
  if(!stringInStorage) {
    this._storage.push(string);
  }
};

setPrototype.contains = function(value){
  valueChecker = false;
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] == value){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(){
};
