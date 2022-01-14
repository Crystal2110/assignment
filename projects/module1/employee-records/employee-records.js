// employee records

var employee = []


function printEmployeeForm(name, job_title, salary,status){
    this.name = name
    this.job_title = job_title
    this.salary = salary
    this.status = status
    
}

var employee1 = new printEmployeeForm("Jon", "Manager", "80/hour", "Contract")
var employee2 = new printEmployeeForm("Michelle", "Assistant Manager", "60/hour", "Part Time")
var employee3 = new printEmployeeForm("Jack", "Sales", "40/hour", "Part time")
var employee = employee.concat(employee1, employee2, employee3)

 printEmployeeForm.prototype.status = function (){
        console.log(this.status)
 }
 
console.log(employee)