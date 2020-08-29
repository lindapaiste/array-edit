import {replaceIndex, removeIndex, removeValue, insertIndex, includeValue, appendValue, swapIndexes, toggleInclusion} from "../src";

test("test array edit methods", () => {

    const initial = ["zero", "one", "two", "three"];

    expect( replaceIndex(initial, 2, "new two")).toEqual( ["zero", "one", "new two", "three"]);

    expect( removeIndex(initial, 1)).toEqual( ["zero", "two", "three"] );

    expect( removeValue(initial, "zero")).toEqual(["one", "two", "three"]);

    expect( insertIndex(initial, 1, "extra one")).toEqual(["zero", "extra one", "one", "two", "three"]);

    expect( appendValue(initial, "four")).toEqual( ["zero", "one", "two", "three", "four"]);

    expect( swapIndexes(initial, 1, 2)).toEqual(["zero", "two", "one", "three"]);

    // do nothing if already included
    expect( includeValue(initial, "one")).toEqual(["zero", "one", "two", "three"]);

    // but add if not included
    expect( includeValue(initial, "four")).toEqual(["zero", "one", "two", "three", "four"]);

    // remove if already included
    expect( toggleInclusion(initial, "one")).toEqual(["zero", "two", "three"]);

    // add if not included
    expect( toggleInclusion(initial, "four")).toEqual(["zero", "one", "two", "three", "four"]);

});
