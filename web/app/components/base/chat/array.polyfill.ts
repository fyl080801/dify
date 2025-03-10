interface Array<T> {
    toReversed(): T[];
}

if (!Array.prototype.toReversed) {
    Array.prototype.toReversed = function <T>(): T[] {
        const reversedArray = [...this];
        reversedArray.reverse();
        return reversedArray;
    };
}
