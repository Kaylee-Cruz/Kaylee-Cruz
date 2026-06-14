//Coding Challenge #6: Employee Management System
//Step 1: Create Employee Base Class
class Employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `Employee: ${this.name}, Department: ${this.department}`;
    }
    }
    //Step 2: Create Manager Subclass
    class Manager extends Employee {
        constructor(name, department, teamSize) {
         super(name, department);
         this.teamSize = teamSize;
     }
        describe() {
         return `${super.describe()}, Team Size: ${this.teamSize}`;
    }
}
//Step 3: Create Company Class
class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}
//Step 4: Initialize Company and Add Employees
const company = new Company();
const emp1 = new Employee('Kendra Scott', 'Engineering');
const emp2 = new Employee('Mark Anthony', 'Marketing');
const mgr1 = new Manager('Charlie Puth', 'Engineering', 5);

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);

console.log('Employee Directory:');
company.listEmployees();
