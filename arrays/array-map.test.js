
// array.test.js
// Jan. 3, 2025
// Rich W.
// with GitHub Copilot


test("array .map() function can mutate array in place, does not return elements", function () {
    let arr = [
        {
            a: 1,
            b: "b"
        }, {
            a: 2,
            b: "b"
        }, {
            a: 3,
            b: "b"
        }
    ];
    const newarr = arr.map((item) => { item.b = item.b + "e" });
    expect(arr).toEqual([
        {
            a: 1,
            b: "be"
        }, {
            a: 2,
            b: "be"
        }, {
            a: 3,
            b: "be"
        }
    ]);
    expect(newarr).toEqual([
        undefined,
        undefined,
        undefined
    ]);
});

test("array mutatation in place custom function", function () {
    // Custom map that mutates in place
    function mapInPlace(arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = fn(arr[i], i, arr);
        }
        return arr;
    }
    const arr = [1, 2, 3];
    const result = mapInPlace(arr, x => x * 2);
    expect(result).toEqual([2, 4, 6]);
    // The original array should also be mutated
    expect(arr).toEqual([2, 4, 6]);
    arr[1]++;
    expect(result).toEqual([2, 5, 6]);
    expect(result).toEqual([2, 5, 6]);
});

test("array .map function can return new array", function () {
    const arr = [1, 2, 3];
    const result = arr.map(x => x * 2);
    expect(result).toEqual([2, 4, 6]);
    // The original array should not be mutated
    expect(arr).toEqual([1, 2, 3]);
});

