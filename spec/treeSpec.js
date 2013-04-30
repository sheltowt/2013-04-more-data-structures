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

  // Add more tests here to test the functionality of tree.
});