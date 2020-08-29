import {union, difference, intersection, symmetricDifference, hasSameElements, newElements, removedElements} from "../src";

test( "test array comparison methods", () => {

    const a = [1,2,3];
    const b = [2,3,4];

    expect( union(a, b)).toEqual([1,2,3,4]);

    expect( difference(a, b)).toEqual([1]);

    expect( difference(b, a)).toEqual([4]);

    expect( intersection(a,b)).toEqual( [2,3]);

    expect( hasSameElements(a, b)).toBe(false);

    expect( hasSameElements([1,2,3], [3,1,2])).toBe( true );

    // order here doesn't matter, so combine with hasSameElements to check
    expect( hasSameElements(symmetricDifference(a, b), [1,4])).toBe(true);

    expect( newElements(b, a)).toEqual([4]);

    expect( removedElements(b, a)).toEqual([1]);

} );
