type DataType<T> = T extends any [] ? "Large" : "Small";

type A = DataType<string[]>
type B = DataType<boolean>
type C = DataType<number[]>
type D = DataType<number>

const a : A = "Large";
const b : D = "Small"