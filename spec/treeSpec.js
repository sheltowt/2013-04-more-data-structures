describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should be able to add new values to nodes in the tree", function() {
    tree.addChild('a');
    expect(tree.contains('a')).toEqual(true);
  });

  it("be able to check all of the children", function() {
    var nodeA = tree.addChild('a');
    var nodeB = nodeA.addChild('b');
    var nodeC = nodeB.addChild('c');
    var nodeB1 = nodeA.addChild('b1');
    expect(tree.contains('a')).toEqual(true);
    expect(tree.contains('b')).toEqual(true);
    expect(tree.contains('c')).toEqual(true);
    expect(tree.contains('b1')).toEqual(true);
  });

  it("create a parent property that points to the parent node", function() {
    var nodeA = tree.addChild('a');
    var nodeB = nodeA.addChild('b');
    var nodeC = nodeB.addChild('c');
    var nodeB1 = nodeA.addChild('b1');
    expect(nodeB.parent.value).toEqual('a');
  });

  // Add more tests here to test the functionality of tree.
});