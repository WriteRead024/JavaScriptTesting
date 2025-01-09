
// spread-syntax.test.js
// 1/9/2025, a US national day of mourning for 39th US President Jimmy Carter
// Rich W.
// GitHub VS Code Copilot

// some tests inspired by Google AI Overview search result

test("spread syntax array concatenation", function () {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect([...arr1, ...arr2]).toEqual([1, 2, 3, 4, 5, 6]);
});

test("spread syntax array copying", function () {
    const arr = [1, 2, 3];
    const copy = [...arr];
    expect(copy).toEqual([1, 2, 3]);
    copy.push(4);
    expect(arr).toEqual([1, 2, 3]);
    expect(copy).toEqual([1, 2, 3, 4]);
});

test("spread syntax array in function arguments", function () {
    const arr = [1, 2, 3];
    const add = (a, b, c) => a + b + c;
    expect(add(...arr)).toBe(6);
});

test("spread syntax object in function arguments", function () {
    const obj = { a: 1, b: 2, c: 3 };
    const add = ({ a, b, c }) => a + b + c;
    expect(add({ ...obj })).toBe(6);
});

test("spread syntax object in function arguments with default values", function () {
    const obj = { a: 1, b: 2 };
    const add = ({ a, b, c = 3 }) => a + b + c;
    expect(add({ ...obj })).toBe(6);
});

test("spread syntax object in function arguments with default values and object property precedence", function () {
    const obj = { a: 1, b: 2, c: 4 };
    const add = ({ a, b, c = 3 }) => a + b + c;
    expect(add({ ...obj })).toBe(7);
});

// start of using test suggestions from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

test("spread syntax object as second of three function arguments", function () {
    const obj = { b: 2, c: 3 };
    const add = (a, { b, c }, d = 4) => a + b + c + d;
    expect(add(1, { ...obj }, 3)).toBe(9);
    expect(add(1, { ...obj })).toBe(10);
});

test("spread syntax of array in object", function () {
    const arr = [1, 2, 3];
    const obj = { ...arr };
    expect(obj).toEqual({ 0: 1, 1: 2, 2: 3 });
});

test("spread syntax of primitives and strings handled correctly", function () {
    const obj = { ...true, ..."test", ...10 };
    expect(obj).toEqual({ '0': 't', '1': 'e', '2': 's', '3': 't' });
});

test("spread syntax insertion of array into another array", function () {
    const bendyparts = ["shoulders", "knees"];
    const lyricsparts = ["head", ...bendyparts, "and", "toes"];
    expect(lyricsparts).toEqual(["head", "shoulders", "knees", "and", "toes"])
});

test("conditionally including array elements in spread syntax", function () {
    let isSummer = false;
    let summerFruit = ['watermelon'];
    let autumnFruit = ['cherry'];
    let fruit = ['apple', 'banana'];
    let availableFruit = [...fruit, ...(isSummer ? summerFruit : autumnFruit)];
    expect(availableFruit).toEqual(['apple', 'banana', 'cherry']);
    isSummer = true;
    availableFruit = [...fruit, ...(isSummer ? summerFruit : autumnFruit)];
    expect(availableFruit).toEqual(['apple', 'banana', 'watermelon']);
});

test("spread syntax object compositing does not trigger setters with same-named properties where Object.assign property precedence does", function () {
    // IMO this test is beyond expectations of normal levels of coding sanity
    let obj1 = {
        'a': 1,
        set b(val) {
            this.a += (val ? val : -1);
            return 'b';
        }
    };
    let obj2 = { 'b': 2 };
    let copyObj = { ...obj1, ...obj2 };
    expect(copyObj.a).toBe(1);
    expect(typeof copyObj.b).toBe('number');
    expect(copyObj.b).toBe(2);
    let assignCopy = Object.assign(obj1, obj2);
    expect(assignCopy.a).toBe(3);
    expect(obj1.a).toBe(3);
    // nothing but Object.assign treatment of a setter property rabbit holeing from here to the end of this test
    let assignCopyTwo = Object.assign(obj1, {});
    expect(assignCopyTwo.a).toBe(3);
    expect(obj1.a).toBe(3);
    let assignCopyThree = Object.assign(obj1, { b: null });
    expect(assignCopyThree.a).toBe(2);
    expect(obj1.a).toBe(2);
    expect(Object.keys(assignCopy).length).toBe(2);
    expect(assignCopy.b).toBe(undefined);
    expect(Object.hasOwnProperty(assignCopy, 'b')).toBe(false);
    expect(obj1['b']).toBe(undefined);
    let obj1setterdescriptor = Object.getOwnPropertyDescriptor(obj1, 'b');
    expect(obj1setterdescriptor.set && obj1setterdescriptor.set.name === 'set b').toBe(true);
    expect(obj1setterdescriptor).not.toBe(undefined);
    let assignCopysetterdescriptor = Object.getOwnPropertyDescriptor(assignCopy, 'b');
    expect(assignCopysetterdescriptor).not.toBe(undefined);
    expect(assignCopysetterdescriptor.set && assignCopysetterdescriptor.set.name === 'set b').toBe(true);
    expect(obj1setterdescriptor.set === assignCopysetterdescriptor.set).toBe(true);
});

test("setter non-triggering object compositing using spread syntax based lambda function", function () {
    const mergeFunction = (...objects) =>
        objects.reduce((paramObjOne, paramObjTwo) => ({ ...paramObjOne, ...paramObjTwo }));
    let obj1 = { a: 1, b: 2, set c(val) { this.b = this.a + val } };
    let obj2 = { c: 3, d: 4, set e(val) { this.d = this.c + val } };
    let obj3 = { e: 5, f: 6 };
    let twomerge = mergeFunction(obj1, obj2);
    expect(twomerge).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    let threemerge = mergeFunction(obj1, obj2, obj3);
    expect(threemerge).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
});

// end of using test suggestions from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

test("spread syntax does not create deep copies of arrays", function () {
    // the VS Code Copilot inline suggestion was better than the mdn web docs example
    const arr = [[1], [2], [3]];
    const copy = [...arr];
    copy[0].push(4);
    expect(copy).toEqual([[1, 4], [2], [3]]);
    expect(arr).toEqual([[1, 4], [2], [3]]);
});

test("array function lambda for spread syntax inclusion of array elements", function () {
    const origArr = [1, 2, 3, 4];
    const mapArr = [...(origArr.map((el) => el > 1))];
    expect(mapArr).toEqual([false, true, true, true]);
    const filterArr = [...(origArr.filter((el) => el > 1))];
    expect(filterArr).toEqual([2, 3, 4]);
});

test("array function lambda for spread syntax inclusion of array elements is the same as non-spread array function results", function () {
    const origArr = [1, 2, 3, 4];
    const spreadMapArr = [...(origArr.map((el) => el > 1))];
    expect(spreadMapArr).toEqual([false, true, true, true]);
    const mapArr = origArr.map((el) => el > 1);
    expect(mapArr).toEqual(spreadMapArr);
    const spreadFilterArr = [...(origArr.filter((el) => el > 1))];
    expect(spreadFilterArr).toEqual([2, 3, 4]);
    const filterArr = origArr.filter((el) => el > 1);
    expect(filterArr).toEqual(spreadFilterArr);
});

// start of tests suggested by VS Code Copilot inline intellisense completion

test("spread syntax object merging correctly has second object property value precedence", function () {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect({ ...obj1, ...obj2 }).toEqual({ a: 1, b: 3, c: 4 });
    expect({ ...obj2, ...obj1 }).toEqual({ a: 1, b: 2, c: 4 });
});

test("spread syntax of object with Symbol properties", function () {
    const sym = Symbol('key');
    const obj1 = { [sym]: 1 };
    const obj2 = { ...obj1, '1': sym };
    expect(obj2).toEqual({ [sym]: 1, '1': sym });
});

test("spread syntax of array with holes as object", function () {
    const arr = [1, , 3];
    const obj = { ...arr };
    expect(obj).toEqual({ '0': 1, '2': 3 });
});

test("spread syntax of object with getter property function has value not function", function () {
    const obj = {
        get a() {
            return 1;
        }
    };
    const copy = { ...obj };
    expect(copy).toEqual({ "a": 1 });
});

// end of tests suggested by VS Code Copilot inline intellisense completion

test("spread syntax copy of object with member function does include function property", function () {
    const obj = {
        'a': 1,
        f() {
            return this.a;
        }
    };
    const copy = { ...obj };
    expect(Object.keys(copy).length).toBe(2);
    expect(copy.a).toBe(1);
    expect(typeof copy.f).toBe('function');
    expect(copy.f).toBe(obj.f);
    expect(copy.f()).toBe(1);
});