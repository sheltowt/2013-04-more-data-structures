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
    hashTable.insert("a", "ahello");
    hashTable.insert("b", "bhello");
    expect(hashTable.retrieve("a")).toEqual("ahello");
    expect(hashTable.retrieve("b")).toEqual("bhello");
  });

  it("it should enter up to 7 values", function() {
    hashTable.insert("a", "ahello");
    hashTable.insert("b", "bhello");
    hashTable.insert("c", "chello");
    hashTable.insert("d", "dhello");
    hashTable.insert("e", "ehello");
    hashTable.insert("f", "fhello");
    hashTable.insert("g", "ghello");
    expect(hashTable.retrieve("g")).toEqual("ghello");
  });

  it("it should be able to remove a value", function() {
    hashTable.insert("a", "ahello");
    hashTable.insert("b", "bhello");
    hashTable.insert("c", "chello");
    hashTable.insert("d", "dhello");
    hashTable.remove("d");
    hashTable.insert("d", "d4hello");
    expect(hashTable.retrieve("d")).toEqual("d4hello");
  });

  // add more tests here to test the functionality of hashTable
});