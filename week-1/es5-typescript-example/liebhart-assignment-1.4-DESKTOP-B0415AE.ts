let employee: string = "John Doe";
let position: string = "Sales Manager";

function empOfTheMonth(emp: string, pos: string): string {
  return `The Employee of the Month is ${emp} our ${pos}`;
}

console.log(empOfTheMonth(employee, position));
