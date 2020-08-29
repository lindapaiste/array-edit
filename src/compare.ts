/**
 * elements which are present in both a and b
 */
export const intersection = <T extends any>(a: T[], b: T[]): T[] => {
    return a.filter(x => b.includes(x));
};

/**
 * all elements of both a and b without double-counting
 *
 * note: if the input arrays a or b include repeated elements, those elements WILL stay repeated
 */
export const union = <T extends any>(a: T[], b: T[]): T[] => {
    return a.concat(difference(b, a));
};

/**
 * elements of a which are not in b
 */
export const difference = <T extends any>(a: T[], b: T[]): T[] => {
    return a.filter(x => !b.includes(x));
};

/**
 * elements of either array which are not found in the other
 */
export const symmetricDifference = <T extends any>(a: T[], b: T[]): T[] => {
    return difference(a, b).concat(difference(b, a));
};

/**
 * whether a and b are essentially the same, regardless of order
 */
export const hasSameElements = <T extends any>(a: T[], b: T[]): boolean => {
    return symmetricDifference(a, b).length === 0;
};

/**
 * helpful alias for difference
 */
export const newElements = <T extends any>(curr: T[], prev: T[] = []): T[] => {
    return difference(curr, prev);
};

/**
 * helpful alias for difference
 */
export const removedElements = <T extends any>(curr: T[], prev: T[] = []): T[] => {
    return difference(prev, curr);
};
