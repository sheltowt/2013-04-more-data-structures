describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should be able to add new values to the end of the list", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    console.log(linkedList);
    expect(linkedList.contains('c')).toEqual(true);
  });

  it("should be able to remove the first value and return it", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    expect(linkedList.removeHead().value).toEqual('a');
  });

  it("should be able to remove the second value and return it", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    expect(linkedList.removeHead().value).toEqual('a');
    expect(linkedList.removeHead().value).toEqual('b');
  });

  it("should be able to evaluate whether a value exists in itself", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    expect(linkedList.contains('a')).toEqual(true);
  });

  it("evaluate whether something is added to the head", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToHead('d');
    expect(linkedList.head.value).toEqual('d');
  });

  it("evaluate whether something is added to the head", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.removeTail().value).toEqual('b');
    expect(linkedList.tail.value).toEqual('a');
  });

  // add more tests here to test the functionality of linkedList
});