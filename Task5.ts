function logLength<T extends {length: number} > (input : T) : number {
    return input.length
}


console.log(logLength("akash"));

console.log(logLength([1, 2, 3, 4]));

console.log(logLength(["a", "b"]));

// console.log(logLength(123));