let secretValue: unknown = "typescript is awesome";

const upperValue = secretValue as string;

const result = upperValue.toUpperCase();
console.log(result)