let empName: string = 'John Doe';
let empPos: string = 'Sales Manager';

// Employee of the Month function
function empMonth(empName: string, empPos: string): string {
  return `Our New Employee of the Month is ${empName} our ${empPos}`;
}

console.log(empMonth(empName, empPos));
