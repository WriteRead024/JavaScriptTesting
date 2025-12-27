// object-instance-methods.test.js
// started 12/27/2025
// Rich W.
// with
// GitHub Copilot


describe('Object spread syntax', () => {
    test('correctly handles primitive, object, and function properties as values or references', () => {
        const obj_one = { a: 1, b: { ooa: "val1", oob: "val2" } };
        const obj_two = { c: "c prop string value", d: function objTwoFunc () { return "func return"; } }
        const merged_obj = { ...obj_one, ...obj_two };

        // Check initial assignment
        expect(merged_obj.a).toBe(1);
        expect(merged_obj.b).toEqual({ ooa: "val1", oob: "val2" });
        expect(merged_obj.c).toBe("c prop string value");
        expect(typeof merged_obj.d).toBe("function");
        expect(merged_obj.d()).toBe("func return");

        // Check function name property
        expect(merged_obj.d.name).toBe("objTwoFunc");
        expect(obj_two.d.name).toBe("objTwoFunc");

        // Change merged_obj.a (primitive)
        merged_obj.a = 99;
        expect(merged_obj.a).toBe(99);
        expect(obj_one.a).toBe(1); // original not affected

        // Change merged_obj.b (object, reference)
        merged_obj.b.ooa = "spread changed!";
        expect(merged_obj.b.ooa).toBe("spread changed!");
        expect(obj_one.b.ooa).toBe("spread changed!"); // original IS affected (reference maintained)

        // Change merged_obj.c (primitive)
        merged_obj.c = "spread string";
        expect(merged_obj.c).toBe("spread string");
        expect(obj_two.c).toBe("c prop string value"); // original not affected

        // Change merged_obj.d (function)
        const anotherFunc = () => "another func";
        merged_obj.d = anotherFunc;
        expect(merged_obj.d()).toBe("another func");
        expect(obj_two.d()).toBe("func return"); // original not affected
        // After reassignment, function name should change
        expect(merged_obj.d.name).toBe("anotherFunc");
        expect(obj_two.d.name).toBe("objTwoFunc");
    });
});
