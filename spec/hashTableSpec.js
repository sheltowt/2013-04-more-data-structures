describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("it should be able to insert a value", function() {
    hashTable.insert("a");
    hashTable.insert("b");
    expect(hashTable.retrieve(1)).toEqual("a");
    expect(hashTable.retrieve(2)).toEqual("b");
  });

  it("it should enter up to 7 values", function() {
    hashTable.insert("a");
    hashTable.insert("b");
    hashTable.insert("c");
    hashTable.insert("d");
    hashTable.insert("e");
    hashTable.insert("f");
    hashTable.insert("g");
    expect(hashTable.retrieve(7)).toEqual("g");
  });

  it("it should be able to remove a value", function() {
    hashTable.insert("a");
    hashTable.insert("b");
    hashTable.insert("c");
    hashTable.insert("d");
    hashTable.remove("d");
    hashTable.insert("3d");
    expect(hashTable.retrieve(3)).toEqual("3d");
  });

  // add more tests here to test the functionality of hashTable
});