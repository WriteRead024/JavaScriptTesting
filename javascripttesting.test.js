

test("test runtime has a 'this' type object", function() {
    expect(typeof this).toBe("object");
});

test("test runtime 'this' object is not null", function() {
    expect(this).not.toBeNull();
});

test("test runtime 'this' object is not undefined", function() {
    expect(this).not.toBeUndefined();
});

