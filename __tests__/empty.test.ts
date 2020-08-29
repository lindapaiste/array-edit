import {arrayFirst, arrayLast, createNonEmptyArray, isNotEmpty, NonEmptyArray, toNonEmpty} from "../src";

test("test non-empty array methods and types", () => {

    const array: number[] = [1, 2, 3];

    const empty: number[] = [];

    const nonEmpty: NonEmptyArray<number> = [1, 2, 3];

    // ------------ FIRST ----------- //

    const aFirst: undefined | number = arrayFirst(array);
    const eFirst: undefined | number = arrayFirst(empty);
    const nFirst: number = arrayFirst(nonEmpty);

    expect(aFirst).toBe(1);
    expect(eFirst).toBe(undefined);
    expect(nFirst).toBe(1);

    // ------------ LAST ----------- //

    const aLast: undefined | number = arrayLast(array);
    const eLast: undefined | number = arrayLast(empty);
    const nLast: number = arrayLast(nonEmpty);

    expect(aLast).toBe(3);
    expect(eLast).toBe(undefined);
    expect(nLast).toBe(3);

    // ------------ EMPTY? ----------- //

    expect(isNotEmpty(array)).toBe(true);
    expect(isNotEmpty(empty)).toBe(false);
    expect(isNotEmpty(nonEmpty)).toBe(true);

    // ------------ CAST ----------- //

    // note: allows assigning any to non empty type, ie. const eTo: NonEmptyArray<number>, which is not ideal
    // when the test actually runs, ALL need to be set to undefined | NonEmptyArray<number>, including the non-empty array

    const aTo: undefined | NonEmptyArray<number> = toNonEmpty(array);
    const eTo: undefined | NonEmptyArray<number> = toNonEmpty(empty);
    const nTo: undefined | NonEmptyArray<number> = toNonEmpty(nonEmpty);

    expect(aTo).toBe(array);
    expect(eTo).toBe(undefined);
    expect(nTo).toBe(nonEmpty);

    // ------------ CREATE ----------- //

    const a: NonEmptyArray<string> = createNonEmptyArray("first");
    const b: NonEmptyArray<string> = createNonEmptyArray(["first", "second"] );
    // expect this to be a TS error and it is: const c = createNonEmptyArray([]);

    expect(a).toEqual(["first"]);
    expect(b).toEqual(["first", "second"]);
})
