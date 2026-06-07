//Coding Challenge 5 - Payroll Processing Toolkit
//Step 2: Array of Employee Objects
const employees = [
    {name: "John", hourlyrate: 15, hoursworked: 40},
    {name: "Amber", hourlyrate: 20, hoursworked: 35},
    {name: "Hervis", hourlyrate: 18, hoursworked: 45},
    {name: "Rebecca", hourlyrate: 22, hoursworked: 30}
];
//Step 3: Calculating base pay up to 40 hours
function calculateBasePay(rate, hours) {
    if (hours > 40) {
        return rate * 40;
    } else {
        return rate * hours;
    }
}
//Step 4: Calculating overtime pay for hours worked beyond 40 at 1.5x rate
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    } else {
        return 0;
    }
}
//Step 5: Calculating taxes at 15% of total pay
function calculateTaxes(totalPay) {
    return totalPay * 0.15;
}
//Step 6: Process Payroll for one employee
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyrate, employee.hoursworked);
    let overtimePay = calculateOvertimePay(employee.hourlyrate, employee.hoursworked);
    let totalPay = basePay + overtimePay;
    let taxes = calculateTaxes(totalPay);
    let netPay = totalPay - taxes;
    return {
        name: employee.name,
        basePay: basePay,   
        overtimePay: overtimePay,
        grossPay: totalPay,
        netPay: netPay
    };
}
//Step 7: Loop through employees and process payroll
console.log("Processing Payroll for All Employees...\n");
for (let employee of employees) {
    let payroll = processPayroll(employee);
    console.log(`Employee: ${payroll.name}`);
    console.log(`Base Pay: $${payroll.basePay.toFixed(2)}`);
    console.log(`Overtime Pay: $${payroll.overtimePay.toFixed(2)}`);
    console.log(`Gross Pay: $${payroll.grossPay.toFixed(2)}`);
    console.log(`Net Pay: $${payroll.netPay.toFixed(2)}`);
    console.log("-----------------------------");
}

