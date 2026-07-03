type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

function getProfile ( employee: Employee ) : string {
    return `Name: ${employee.name}, Role: ${employee.role}`
}

const person1 : Employee = {
    name: "Akash",
    age: 23,
    role: "Web Developer",
    salary: 20500,
}

const result = getProfile (person1);
console.log(result);