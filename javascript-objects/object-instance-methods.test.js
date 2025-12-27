// object-instance-methods.test.js
// started 12/27/2025
// Rich W.
// with
// GitHub Copilot


describe('Object.assign', () => {
    test('correctly handles primitive, object, and function properties as values or references', () => {
        const obj_one = { a: 1, b: { ooa: "val1", oob: "val2" } };
        const obj_two = { c: "c prop string value", d: function objTwoFunc () { return "func return"; } }
        let combo_obj = {};
        Object.assign(combo_obj, obj_one);
        Object.assign(combo_obj, obj_two);

        // Check initial assignment
        expect(combo_obj.a).toBe(1);
        expect(combo_obj.b).toEqual({ ooa: "val1", oob: "val2" });
        expect(combo_obj.c).toBe("c prop string value");
        expect(typeof combo_obj.d).toBe("function");
        expect(combo_obj.d()).toBe("func return");

        // Check function name property
        expect(combo_obj.d.name).toBe("objTwoFunc");
        expect(obj_two.d.name).toBe("objTwoFunc");

        // Change combo_obj.a (primitive)
        combo_obj.a = 42;
        expect(combo_obj.a).toBe(42);
        expect(obj_one.a).toBe(1); // original not affected

        // Change combo_obj.b (object, reference)
        combo_obj.b.ooa = "changed!";
        expect(combo_obj.b.ooa).toBe("changed!");
        expect(obj_one.b.ooa).toBe("changed!"); // original IS affected (reference maintained)

        // Change combo_obj.c (primitive)
        combo_obj.c = "new string";
        expect(combo_obj.c).toBe("new string");
        expect(obj_two.c).toBe("c prop string value"); // original not affected

        // Change combo_obj.d (function)
        const newFunc = () => "new func";
        combo_obj.d = newFunc;
        expect(combo_obj.d()).toBe("new func");
        expect(obj_two.d()).toBe("func return"); // original not affected
        // After reassignment, function name should change
        expect(combo_obj.d.name).toBe("newFunc");
        expect(obj_two.d.name).toBe("objTwoFunc");
    });
});



