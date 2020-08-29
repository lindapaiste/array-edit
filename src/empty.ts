/**
 * These functions are mostly for the purpose of having better typescript types
 * TS should know whether an array is allowed to be empty
 */

/**
 * Declare that the array will always have at least one value,
 * ie. index 0 is always set
 */
export type NonEmptyArray<T> = T[] & { 0: T };

/**
 * Basic type finds the element type of an array
 */
export type Unpack<A> = A extends (infer E)[] ? E : A

/**
 * Advanced type states that an element could be of the expected type or undefined, but if the array is known to not be
 * empty then the element will not be undefined.  This becomes the return type for the arrayFirst and arrayLast
 * methods.
 */
type Element<A> = A extends NonEmptyArray<infer T> ? T : (Unpack<A> | undefined)

/**
 * When using array[0], typescript will apply the type T even if the array is empty.
 *
 * This arrayFirst method allows the possibility that array[0] could be undefined (like lodash first()), but also tries
 * to infer whether the first entry is always defined based on the array's type signature.
 */
export const arrayFirst = <A extends any[]>(array: A): Element<A> => {
    return array[0];
}

/**
 * same as arrayFirst, but for the last entry
 */
export const arrayLast = <A extends any[]>(array: A): A extends NonEmptyArray<infer T> ? T : (Unpack<A> | undefined) => {
    return array[array.length - 1];
}

/**
 * if the array has length, TS now knows that it is a NonEmptyArray
 */
export const isNotEmpty = <T>(array: T[]): array is NonEmptyArray<T> => {
    return array.length > 0;
}

/**
 * drops empty arrays in favor of undefined
 *
 * provided an array that may or may not be empty, either return the array with the knowledge that it is not empty, or
 * return undefined if it is empty.
 */
export const toNonEmpty = <T>(array: T[]): NonEmptyArray<T> | undefined => {
    return isNotEmpty(array) ? array : undefined;
}

/**
 * helper to apply the NonEmptyArray type to an array
 * can pass in one value or an array of values
 */
export const createNonEmptyArray = <T>(value: T | NonEmptyArray<T>): NonEmptyArray<T> => {
    return Array.isArray(value) ? value : [value];
}
